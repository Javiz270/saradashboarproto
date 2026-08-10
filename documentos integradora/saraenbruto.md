\-- \============================================================  
\-- S.A.R.A. — Esquema de base de datos (Supabase / PostgreSQL)  
\-- Learning Commons: perfiles, cubículos, préstamos, visitantes  
\-- \============================================================

\-- \============================================================  
\-- 1\. PERFILES (extiende auth.users, que administra Supabase Auth)  
\-- \============================================================  
create table public.profiles (  
  id uuid primary key references auth.users(id) on delete cascade,  
  full\_name text,  
  email text unique not null,  
  avatar\_url text,  
  role text not null default 'staff' check (role in ('admin', 'staff')),  
  created\_at timestamptz not null default now()  
);

\-- Crea automáticamente el perfil la primera vez que alguien inicia sesión  
create or replace function public.handle\_new\_user()  
returns trigger  
language plpgsql  
security definer set search\_path \= public  
as $$  
begin  
  insert into public.profiles (id, full\_name, email, avatar\_url)  
  values (  
    new.id,  
    coalesce(new.raw\_user\_meta\_data \-\>\> 'full\_name', new.email),  
    new.email,  
    new.raw\_user\_meta\_data \-\>\> 'avatar\_url'  
  );  
  return new;  
end;  
$$;

create trigger on\_auth\_user\_created  
  after insert on auth.users  
  for each row execute function public.handle\_new\_user();

\-- \============================================================  
\-- 2\. CUBÍCULOS  
\-- \============================================================  
create table public.cubicles (  
  id uuid primary key default gen\_random\_uuid(),  
  code text unique not null,            
  capacity int not null default 1,  
  status text not null default 'available'  
    check (status in ('available', 'occupied', 'maintenance')),  
  created\_at timestamptz not null default now()  
);

create table public.cubicle\_reservations (  
  id uuid primary key default gen\_random\_uuid(),  
  cubicle\_id uuid not null references public.cubicles(id) on delete cascade,  
  user\_id uuid not null references public.profiles(id) on delete cascade,  
  start\_time timestamptz not null,  
  end\_time timestamptz not null,  
  status text not null default 'active'  
    check (status in ('active', 'completed', 'cancelled')),  
  created\_at timestamptz not null default now(),  
  constraint valid\_range check (end\_time \> start\_time)  
);

\-- \============================================================  
\-- 3\. RECURSOS (libros / materiales)  
\-- \============================================================  
create table public.resources (  
  id uuid primary key default gen\_random\_uuid(),  
  title text not null,  
  author text,  
  isbn text,  
  google\_books\_id text,  
  total\_copies int not null default 1,  
  available\_copies int not null default 1,  
  created\_at timestamptz not null default now(),  
  constraint copies\_valid check (  
    available\_copies \>= 0 and available\_copies \<= total\_copies  
  )  
);

\-- \============================================================  
\-- 4\. PRÉSTAMOS  
\-- \============================================================  
create table public.loans (  
  id uuid primary key default gen\_random\_uuid(),  
  resource\_id uuid not null references public.resources(id) on delete cascade,  
  user\_id uuid not null references public.profiles(id) on delete cascade,  
  loan\_date timestamptz not null default now(),  
  due\_date timestamptz not null,  
  return\_date timestamptz,  
  status text not null default 'active'  
    check (status in ('active', 'returned', 'overdue')),  
  created\_at timestamptz not null default now()  
);

\-- \============================================================  
\-- 5\. VISITANTES  
\-- \============================================================  
create table public.visitors (  
  id uuid primary key default gen\_random\_uuid(),  
  full\_name text not null,  
  reason text,  
  check\_in timestamptz not null default now(),  
  check\_out timestamptz,  
  registered\_by uuid references public.profiles(id)  
);

\-- \============================================================  
\-- 6\. VISTAS PARA DASHBOARD / REPORTES  
\-- \============================================================  
create or replace view public.v\_cubicle\_occupancy as  
select  
  count(\*) filter (where status \= 'occupied')    as occupied,  
  count(\*) filter (where status \= 'available')   as available,  
  count(\*)                                       as total  
from public.cubicles;

create or replace view public.v\_active\_loans as  
select  
  l.id, l.due\_date, l.status,  
  r.title            as resource\_title,  
  p.full\_name        as borrower\_name  
from public.loans l  
join public.resources r on r.id \= l.resource\_id  
join public.profiles p  on p.id \= l.user\_id  
where l.status in ('active', 'overdue');

create or replace view public.v\_visitor\_count\_today as  
select count(\*) as total  
from public.visitors  
where check\_in::date \= current\_date;

\-- \============================================================  
\-- 7\. ROW LEVEL SECURITY  
\-- \============================================================  
alter table public.profiles              enable row level security;  
alter table public.cubicles              enable row level security;  
alter table public.cubicle\_reservations  enable row level security;  
alter table public.resources             enable row level security;  
alter table public.loans                 enable row level security;  
alter table public.visitors              enable row level security;

create policy "authenticated read profiles"     on public.profiles              for select to authenticated using (true);  
create policy "authenticated read cubicles"     on public.cubicles              for select to authenticated using (true);  
create policy "authenticated read reservations" on public.cubicle\_reservations  for select to authenticated using (true);  
create policy "authenticated read resources"    on public.resources             for select to authenticated using (true);  
create policy "authenticated read loans"        on public.loans                 for select to authenticated using (true);  
create policy "authenticated read visitors"     on public.visitors              for select to authenticated using (true);

create policy "authenticated manage cubicles"     on public.cubicles              for all to authenticated using (true) with check (true);  
create policy "authenticated manage reservations" on public.cubicle\_reservations  for all to authenticated using (true) with check (true);  
create policy "authenticated manage resources"    on public.resources             for all to authenticated using (true) with check (true);  
create policy "authenticated manage loans"        on public.loans                 for all to authenticated using (true) with check (true);  
create policy "authenticated manage visitors"     on public.visitors              for all to authenticated using (true) with check (true);

\-- \============================================================  
\-- 8\. INSERTAR DATOS DE PRUEBA (INDEPENDIENTES DE USUARIOS)  
\-- \============================================================

INSERT INTO public.cubicles (code, capacity, status) VALUES  
('C-101', 4, 'occupied'),  
('C-102', 2, 'available'),  
('C-103', 6, 'maintenance');

INSERT INTO public.resources (title, author, isbn, total\_copies, available\_copies) VALUES  
('Clean Architecture', 'Robert C. Martin', '9780134494166', 3, 2),  
('Diseño UX/UI', 'Jane Doe', '9781449373320', 2, 2),  
('Patrones de Diseño', 'Erich Gamma', '9788466657989', 1, 0); 

INSERT INTO public.visitors (full\_name, reason, check\_in) VALUES  
('Estudiante Visitante', 'Consulta en sala', NOW() \- INTERVAL '2 hours'),  
('Profesor Externo', 'Uso de equipo', NOW() \- INTERVAL '30 minutes');  
