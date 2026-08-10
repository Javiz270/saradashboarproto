# Base de Datos S.A.R.A. (Supabase / PostgreSQL)

Este directorio contiene los scripts SQL para la creación y configuración inicial de la base de datos de producción en Supabase (PostgreSQL).

> ⚠️ **IMPORTANTE**: La base de datos actual del proyecto sigue siendo SQLite (`backend/sara.db`). Esta no ha sido migrada ni reemplazada todavía. El archivo `sara_supabase.sql` sirve para inicializar la nueva infraestructura en Supabase.

## Tablas Creadas

1. **`profiles`**: Almacena todos los datos de estudiantes, staff y admins. Está vinculada con un FK a `auth.users` (sistema interno de autenticación de Supabase).
2. **`resources` y `book_copies`**: Separan lógicamente la "información del libro" de los "ejemplares físicos" a ser prestados.
3. **`loans`**: Historial de los préstamos de libros.
4. **`cubicles` y `cubicle_reservations`**: Catálogo e historial de uso de los cubículos.
5. **`computers` y `computer_loans`**: Catálogo e historial de uso de los equipos de cómputo.
6. **`events` y `visitors`**: Controlan el acceso de personas externas que acuden temporalmente (sin cuenta real en el sistema).

## Relaciones

- Prácticamente todas las tablas transaccionales (`loans`, `cubicle_reservations`, `computer_loans`, `visitors`) hacen referencia (FK) a la tabla `profiles` mediante dos campos: 
  1. `user_id`: El usuario al que se le da el servicio.
  2. `registered_by`: La bibliotecaria o admin que realizó la operación (para efectos de auditoría y evitar que los usuarios asuman haber devuelto cosas por sí solos).
- El catálogo base (`resources`, `cubicles`, `computers`) es 1 a N respecto a su historial transaccional.

## Trigger de Autenticación (Auth Trigger)

Cuando un usuario se loguea por primera vez vía **Google OAuth** o se registra por **Correo/Contraseña**, el motor interno de Supabase crea un registro en la tabla oculta `auth.users`. 

Hemos configurado un Trigger (`handle_new_user()`) con `SECURITY DEFINER` que se dispara automáticamente después de la inserción en `auth.users`, tomando el ID y el correo para insertarlos en `public.profiles`. 
**El rol asignado siempre será `student` por defecto, garantizando la seguridad en el registro público.**

## Disponibilidad de Recursos (Calculada Dinámicamente)

A diferencia de la antigua base de datos, en este esquema **NO existen las columnas redundantes `occupied`, `in_use` o `current_user_id`** en los catálogos. 

Para saber si una computadora, cubículo o ejemplar está disponible se aplican dos reglas al vuelo:
1. El recurso debe tener `is_maintenance = FALSE`.
2. NO debe existir un registro en la tabla de su historial (ej. `computer_loans`) con `status = 'active'` vinculado al ID del recurso.

Para garantizar esto y que no haya condiciones de carrera, el SQL incluye **Índices Parciales Únicos**. (Por ejemplo: `CREATE UNIQUE INDEX idx_unique_active_computer_loan ON computer_loans(computer_id) WHERE status = 'active';`).

## Datos Iniciales (Seed)

El script SQL incluye únicamente los cubículos confirmados de la biblioteca:
- Africa
- Asia
- America
- Oceania
- Europa

No se han insertado usuarios de prueba en SQL porque éstos dependerían de UUIDs que solo `auth.users` de Supabase puede gestionar correctamente.
