-- =================================================================================
-- S.A.R.A. - Script Inicial para Base de Datos Supabase (PostgreSQL)
-- Descripción: Creación de tablas, restricciones, índices y triggers de Auth.
-- =================================================================================

-- ---------------------------------------------------------------------------------
-- 1. TABLA: perfiles (profiles)
-- Depende de auth.users de Supabase
-- ---------------------------------------------------------------------------------
CREATE TABLE public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    first_name VARCHAR(100),
    last_name_paternal VARCHAR(100),
    last_name_maternal VARCHAR(100),
    career VARCHAR(100),
    grade VARCHAR(20),
    "group" VARCHAR(20),
    student_id CHAR(4) CHECK (student_id ~ '^[0-9]{4}$'),
    email VARCHAR(255) UNIQUE NOT NULL,
    avatar_url TEXT,
    role VARCHAR(20) NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'staff', 'admin')),
    status VARCHAR(20) NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ---------------------------------------------------------------------------------
-- 2. TABLA: recursos (resources - Información bibliográfica)
-- ---------------------------------------------------------------------------------
CREATE TABLE public.resources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    authors TEXT[] NOT NULL DEFAULT '{}',
    isbn VARCHAR(20),
    cover_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ---------------------------------------------------------------------------------
-- 3. TABLA: ejemplares físicos (book_copies)
-- ---------------------------------------------------------------------------------
CREATE TABLE public.book_copies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    resource_id UUID NOT NULL REFERENCES public.resources(id) ON DELETE CASCADE,
    internal_code VARCHAR(50) UNIQUE NOT NULL,
    is_maintenance BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ---------------------------------------------------------------------------------
-- 4. TABLA: préstamos de libros (loans)
-- ---------------------------------------------------------------------------------
CREATE TABLE public.loans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    copy_id UUID NOT NULL REFERENCES public.book_copies(id) ON DELETE RESTRICT,
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE RESTRICT,
    registered_by UUID NOT NULL REFERENCES public.profiles(id) ON DELETE RESTRICT,
    loan_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    due_date TIMESTAMPTZ NOT NULL,
    return_date TIMESTAMPTZ,
    status VARCHAR(20) NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'returned', 'overdue')),
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT chk_loan_dates CHECK (return_date IS NULL OR return_date >= loan_date)
);

-- ---------------------------------------------------------------------------------
-- 5. TABLA: cubículos (cubicles)
-- ---------------------------------------------------------------------------------
CREATE TABLE public.cubicles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(32) UNIQUE NOT NULL,
    name VARCHAR(160),
    capacity INTEGER NOT NULL DEFAULT 1 CHECK (capacity > 0),
    is_maintenance BOOLEAN NOT NULL DEFAULT FALSE
);

-- ---------------------------------------------------------------------------------
-- 6. TABLA: reservas de cubículos (cubicle_reservations)
-- ---------------------------------------------------------------------------------
CREATE TABLE public.cubicle_reservations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cubicle_id UUID NOT NULL REFERENCES public.cubicles(id) ON DELETE RESTRICT,
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE RESTRICT,
    registered_by UUID NOT NULL REFERENCES public.profiles(id) ON DELETE RESTRICT,
    start_time TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    end_time TIMESTAMPTZ,
    status VARCHAR(20) NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'completed', 'cancelled')),
    CONSTRAINT chk_cubicle_dates CHECK (end_time IS NULL OR end_time > start_time)
);

-- ---------------------------------------------------------------------------------
-- 7. TABLA: computadoras (computers)
-- ---------------------------------------------------------------------------------
CREATE TABLE public.computers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code VARCHAR(32) UNIQUE NOT NULL,
    name VARCHAR(160),
    is_maintenance BOOLEAN NOT NULL DEFAULT FALSE
);

-- ---------------------------------------------------------------------------------
-- 8. TABLA: préstamos de computadoras (computer_loans)
-- ---------------------------------------------------------------------------------
CREATE TABLE public.computer_loans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    computer_id UUID NOT NULL REFERENCES public.computers(id) ON DELETE RESTRICT,
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE RESTRICT,
    registered_by UUID NOT NULL REFERENCES public.profiles(id) ON DELETE RESTRICT,
    start_time TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    end_time TIMESTAMPTZ,
    status VARCHAR(20) NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'completed')),
    CONSTRAINT chk_computer_dates CHECK (end_time IS NULL OR end_time > start_time)
);

-- ---------------------------------------------------------------------------------
-- 9. TABLA: eventos (events)
-- ---------------------------------------------------------------------------------
CREATE TABLE public.events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    start_time TIMESTAMPTZ NOT NULL,
    end_time TIMESTAMPTZ,
    CONSTRAINT chk_event_dates CHECK (end_time IS NULL OR end_time >= start_time)
);

-- ---------------------------------------------------------------------------------
-- 10. TABLA: visitantes (visitors)
-- ---------------------------------------------------------------------------------
CREATE TABLE public.visitors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_id UUID REFERENCES public.events(id) ON DELETE SET NULL,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    institution VARCHAR(255),
    check_in TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    check_out TIMESTAMPTZ,
    registered_by UUID NOT NULL REFERENCES public.profiles(id) ON DELETE RESTRICT,
    CONSTRAINT chk_visitor_dates CHECK (check_out IS NULL OR check_out >= check_in)
);

-- =================================================================================
-- ÍNDICES Y RESTRICCIONES (CONCURRENCIA)
-- =================================================================================

-- Un ejemplar no puede tener dos préstamos activos al mismo tiempo.
CREATE UNIQUE INDEX idx_unique_active_loan ON public.loans(copy_id) WHERE status = 'active';

-- Un cubículo no puede tener dos reservas activas simultáneas.
CREATE UNIQUE INDEX idx_unique_active_cubicle_res ON public.cubicle_reservations(cubicle_id) WHERE status = 'active';

-- Una computadora no puede tener dos préstamos activos simultáneamente.
CREATE UNIQUE INDEX idx_unique_active_computer_loan ON public.computer_loans(computer_id) WHERE status = 'active';

-- Índices adicionales para rendimiento
CREATE INDEX idx_profiles_student_id ON public.profiles(student_id);
CREATE INDEX idx_resources_isbn ON public.resources(isbn);

-- =================================================================================
-- TRIGGER: Creación automática de perfiles desde Supabase Auth
-- =================================================================================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (
        id,
        first_name,
        email,
        avatar_url,
        role
    )
    VALUES (
        NEW.id,
        NEW.raw_user_meta_data->>'given_name',
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'avatar_url', NEW.raw_user_meta_data->>'picture'),
        'student'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =================================================================================
-- DATOS INICIALES (SEED DATA)
-- =================================================================================

-- Insertar únicamente los cubículos confirmados
INSERT INTO public.cubicles (code, name, capacity)
VALUES 
    ('C-AFRICA', 'Africa', 1),
    ('C-ASIA', 'Asia', 1),
    ('C-AMERICA', 'America', 1),
    ('C-OCEANIA', 'Oceania', 1),
    ('C-EUROPA', 'Europa', 1);
