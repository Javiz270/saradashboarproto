# Diagramas del Proyecto S.A.R.A. (Códigos Mermaid)

Este documento contiene los códigos fuente en formato **Mermaid** para generar todos los diagramas y figuras del proyecto **S.A.R.A. (Sistema de Acceso y Registro Automatizado)**.

### **¿Cómo utilizar estos códigos?**
1. **Mermaid Live Editor (Recomendado):** Ingresa a [https://mermaid.live/](https://mermaid.live/), pega el bloque de código del diagrama de tu elección y podrás previsualizarlo e inmediatamente exportarlo como imagen (**PNG, SVG o PDF**) para insertarlo en tu documento de Google Docs o Word.
2. **Visual Studio Code:** Si usas VS Code, puedes instalar la extensión **"Markdown Preview Mermaid Support"** para ver los diagramas renderizados directamente en el editor.
3. **Alternativas de Dibujo (Manual):** Si prefieres dibujar o personalizar los diagramas manualmente con interfaces de arrastrar y soltar, te sugerimos utilizar **Figma** (diseño vectorial moderno) o **Draw.io / Lucidchart** (ideal para diagramas relacionales e institucionales).

---

## 1. Metodología Scrum (Sprints de S.A.R.A.)
- **Corresponde a:** **Imagen 2: Diagrama de la metodología Scrum.jpg** (Sección 2.6 del documento principal)
- **Descripción:** Representa el ciclo de Scrum del proyecto y los entregables clave de cada sprint.

```mermaid
flowchart TD
    S1[Sprint 1: Planeación y Diseño] --> S2[Sprint 2: Base de Datos y API Backend]
    S2 --> S3[Sprint 3: Interfaz Frontend y Traducciones]
    S3 --> S4[Sprint 4: Integración del Sistema y OAuth]
    S4 --> S5[Sprint 5: Pruebas de Calidad y Despliegue]

    subgraph Entregables_Sprint1 [Entregables Sprint 1]
        D1[Requisitos funcionales]
        D2[Diseño UI en Figma]
    end

    subgraph Entregables_Sprint2 [Entregables Sprint 2]
        D3[Esquema Supabase Postgres]
        D4[API REST en FastAPI]
    end

    subgraph Entregables_Sprint3 [Entregables Sprint 3]
        D5[Cascarón en React 19 + Vite]
        D6[Traducción i18n ES/EN]
    end

    subgraph Entregables_Sprint4 [Entregables Sprint 4]
        D7[Conexión Frontend-Backend]
        D8[Login Seguro Google OAuth]
    end

    subgraph Entregables_Sprint5 [Entregables Sprint 5]
        D9[Pruebas con usuarios]
        D10[Despliegue a Producción]
    end

    S1 --- Entregables_Sprint1
    S2 --- Entregables_Sprint2
    S3 --- Entregables_Sprint3
    S4 --- Entregables_Sprint4
    S5 --- Entregables_Sprint5
```

---

## 2. Arquitectura de S.A.R.A. (Nivel de Componentes y Flujo)
- **Corresponde a:** **Imagen 6: Flowchart de Arquitectura SARA.jpg** (Sección 10.1 del documento principal)
- **Descripción:** Esquematiza la comunicación cliente-servidor-base de datos con consumo de Google Books API.

```mermaid
flowchart TB
    subgraph Cliente [Capa Cliente - Frontend React 19]
        Vite[Servidor Vite / App SPA]
        UI[Componentes React / JSX]
        CSS[Variables Estilos CSS]
        I18n[react-i18next ES/EN]
        Hooks[Hooks Personalizados de API]
        
        Vite --> UI
        UI --> CSS
        UI --> I18n
        UI --> Hooks
    end

    subgraph Servidor [Capa Aplicación - Backend FastAPI]
        Fast[FastAPI Router]
        SQLA[SQLAlchemy ORM]
        GBC[Google Books Service]
        
        Fast --> SQLA
        Fast --> GBC
    end

    subgraph Nube [Capa de Datos y Seguridad - Supabase]
        Auth[Google OAuth Service]
        DB[(PostgreSQL Database)]
        RLS[Políticas Row Level Security]
        
        DB --- RLS
    end

    subgraph Externo [APIs Externas]
        GAPI[Google Books Web API]
    end

    %% Flujos de interacción
    Hooks -- "1. Autenticación Google" --> Auth
    Auth -- "2. Retorna JWT Token" --> Hooks
    Hooks -- "3. HTTPS Request + JWT" --> Fast
    Fast -- "4. Valida sesión con token" --> Auth
    SQLA -- "5. Consultas Relacionales (CRUD)" --> DB
    GBC -- "6. Petición de Libro por ISBN" --> GAPI
```

---

## 3. Diagrama de Navegación del Sitio (Rutas del Frontend)
- **Corresponde a:** **Imagen 7: Diagrama de Rutas y Navegación de SARA.jpg** (Sección 10.2 del documento principal)
- **Descripción:** Muestra el flujo de navegación del usuario, la restricción de login y vistas asignadas según el rol.

```mermaid
flowchart TD
    Start([Usuario accede a SARA Web]) --> CheckAuth{¿Está logueado?}
    
    CheckAuth -- No --> Login[Vista de Login /login]
    Login --> GLogin[Autenticar con Google OAuth]
    GLogin --> CheckAuth
    
    CheckAuth -- Sí --> Dashboard[Dashboard Principal /]
    
    Dashboard --> Sidebar{Menú de Navegación Lateral}
    
    Sidebar --> V1[Mis Reservas / Perfil]
    Sidebar --> V2[Reservas de Cubículos /resources]
    
    %% Permisos por roles
    Sidebar --> CheckStaff{¿Es Staff o Admin?}
    
    CheckStaff -- Sí --> V3[Gestión de Préstamos /loans]
    CheckStaff -- Sí --> V4[Registro de Visitantes /visitors]
    CheckStaff -- Sí --> V5[Exportación de Reportes /reports]
    
    CheckStaff -- No --> StudentRestrict[Acceso Restringido a Vistas Administrativas]
    
    Sidebar --> CheckAdmin{¿Es Administrador?}
    CheckAdmin -- Sí --> V6[Gestión de Usuarios /users]
    CheckAdmin -- No --> StaffRestrict[Acceso Restringido a Gestión de Usuarios]
```

---

## 4. Diagrama Entidad-Relación de la Base de Datos SARA
- **Corresponde a:** **Imagen 8: Diagrama Entidad-Relación de Base de Datos SARA.jpg** (Sección 10.3 del documento principal)
- **Descripción:** Refleja la estructura física e integridad referencial de las tablas creadas en Supabase PostgreSQL.

```mermaid
erDiagram
    profiles {
        uuid id PK "Referencia a auth.users(id)"
        varchar first_name
        varchar last_name_paternal
        varchar last_name_maternal
        varchar career
        varchar grade
        varchar group
        char student_id "Filtro ^[0-9]{4}$"
        varchar email "Unique"
        text avatar_url
        varchar role "student / staff / admin"
        varchar status "active / inactive / suspended"
        timestamptz created_at
        timestamptz updated_at
    }

    resources {
        uuid id PK
        varchar title
        text_array authors
        varchar isbn
        text cover_url
        timestamptz created_at
        timestamptz updated_at
    }

    book_copies {
        uuid id PK
        uuid resource_id FK "Relación con resources.id"
        varchar internal_code "Unique"
        boolean is_maintenance
        timestamptz created_at
        timestamptz updated_at
    }

    loans {
        uuid id PK
        uuid copy_id FK "Relación con book_copies.id"
        uuid user_id FK "Relación con profiles.id (Estudiante)"
        uuid registered_by FK "Relación con profiles.id (Staff)"
        timestamptz loan_date
        timestamptz due_date
        timestamptz return_date
        varchar status "active / returned / overdue"
        text notes
        timestamptz created_at
        timestamptz updated_at
    }

    cubicles {
        uuid id PK
        varchar code "Unique"
        varchar name
        integer capacity
        boolean is_maintenance
    }

    cubicle_reservations {
        uuid id PK
        uuid cubicle_id FK "Relación con cubicles.id"
        uuid user_id FK "Relación con profiles.id (Estudiante)"
        uuid registered_by FK "Relación con profiles.id (Staff)"
        timestamptz start_time
        timestamptz end_time
        varchar status "active / completed / cancelled"
    }

    computers {
        uuid id PK
        varchar code "Unique"
        varchar name
        boolean is_maintenance
    }

    computer_loans {
        uuid id PK
        uuid computer_id FK "Relación con computers.id"
        uuid user_id FK "Relación con profiles.id (Estudiante)"
        uuid registered_by FK "Relación con profiles.id (Staff)"
        timestamptz start_time
        timestamptz end_time
        varchar status "active / completed"
    }

    events {
        uuid id PK
        varchar name
        text description
        timestamptz start_time
        timestamptz end_time
    }

    visitors {
        uuid id PK
        uuid event_id FK "Relación opcional con events.id"
        varchar full_name
        varchar email
        varchar institution
        timestamptz check_in
        timestamptz check_out
        uuid registered_by FK "Relación con profiles.id (Staff)"
    }

    %% Relaciones
    resources ||--o{ book_copies : "tiene ejemplares"
    book_copies ||--o{ loans : "se presta en"
    profiles ||--o{ loans : "solicita (estudiante)"
    profiles ||--o{ loans : "registra (staff)"
    
    cubicles ||--o{ cubicle_reservations : "se agenda en"
    profiles ||--o{ cubicle_reservations : "reserva (estudiante)"
    profiles ||--o{ cubicle_reservations : "registra (staff)"

    computers ||--o{ computer_loans : "se presta en"
    profiles ||--o{ computer_loans : "recibe (estudiante)"
    profiles ||--o{ computer_loans : "registra (staff)"

    events ||--o{ visitors : "puede vincularse a"
    profiles ||--o{ visitors : "es registrado por (staff)"
```

---

## 5. Cronograma del Proyecto (Diagrama de Gantt)
- **Corresponde a:** **Imagen 9: Diagrama de Gantt del Cronograma SARA.jpg** (Sección 10.4 del documento principal)
- **Descripción:** Calendarización de las fases del proyecto por sprints de desarrollo.

```mermaid
gantt
    title Cronograma de Desarrollo S.A.R.A.
    dateFormat  YYYY-MM-DD
    section Sprints de Desarrollo
    Sprint 1: Planeación y Diseño de Interfaz (Figma)      :active, s1, 2026-08-10, 2026-09-06
    Sprint 2: Configuración de Base de Datos y API Backend  : s2, 2026-09-07, 2026-10-04
    Sprint 3: Construcción Frontend (React) e i18n         : s3, 2026-10-05, 2026-11-01
    Sprint 4: Integración del Sistema y Google OAuth        : s4, 2026-11-02, 2026-11-22
    Sprint 5: Pruebas de Calidad, Validación y Despliegue  : s5, 2026-11-23, 2026-12-14
```
