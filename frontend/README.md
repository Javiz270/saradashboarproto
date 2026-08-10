# S.A.R.A. — Módulo Web

Dashboard administrativo para el **Learning Commons** universitario: control de accesos, cubículos, préstamos de recursos, usuarios y reportes.

## Stack

- React 19 + Vite
- JavaScript (sin TypeScript)
- CSS estándar con custom properties (sin frameworks UI)
- Supabase (auth Google OAuth + base de datos)
- API REST propia (FastAPI)
- Google Books API
- react-i18next (ES/EN)
- react-router-dom

## Inicio rápido

```bash
# Requiere Node.js 18+
npm install
cp .env.local .env.local   # completar variables (ver abajo)
npm run dev
```

La app está diseñada exclusivamente para **escritorio** (mínimo 1280px).

## Variables de entorno

| Variable | Descripción |
|---|---|
| `VITE_SUPABASE_URL` | URL del proyecto Supabase |
| `VITE_SUPABASE_ANON_KEY` | Clave pública anónima de Supabase |
| `VITE_CORE_API_URL` | URL base de la API FastAPI |
| `VITE_GOOGLE_BOOKS_API_KEY` | Clave de Google Books API |

UI Avatars no requiere variable — la URL se construye en `src/apis/uiAvatars/`.

## Arquitectura de carpetas

El código se organiza en **3 capas** dentro de `src/`:

```
¿Habla con un servicio externo?  →  /apis
¿Pertenece a un módulo de negocio?  →  /features/<modulo>
¿Es UI reutilizable sin lógica de negocio?  →  /components
```

### `/apis` — Integraciones externas

Una carpeta por servicio. **Sin JSX.** Cada integración sigue el mismo contrato:

| Archivo | Responsabilidad |
|---|---|
| `<nombre>.client.js` | Instancia base (fetch/axios) con URL y headers |
| `<nombre>.service.js` | Funciones puras por endpoint, datos parseados |
| `use<Nombre>.js` | Hook `{ data, loading, error }` — único puente hacia `/features` |

Integraciones actuales: `googleAuth`, `googleBooks`, `uiAvatars`, `coreApi`.

### `/features` — Módulos de negocio

Mini-apps autocontenidas. Cada módulo tiene:

```
features/<modulo>/
├── components/   # UI específica del módulo
├── hooks/        # lógica de negocio del módulo
├── pages/        # vistas/rutas
├── context/      # (solo auth) estado compartido del módulo
└── index.js      # barrel export
```

Módulos: `auth`, `dashboard`, `users`, `cubicles`, `loans`, `reports`.

### `/components` — UI genérica

Piezas visuales reutilizables **sin lógica de negocio**: layout (`Navbar`, `Sidebar`), botones base, tablas genéricas, routing (`ProtectedRoute`).

### Transversales

- `/i18n` — internacionalización ES/EN (react-i18next)
- `/theme` — tema claro/oscuro con `data-theme` en `<html>`
- `/styles` — CSS global usando variables de `variables.css`
- `/app` — composición raíz (`App`, router, providers)

## Rutas

| Ruta | Acceso | Vista |
|---|---|---|
| `/login` | Pública | Login con Google |
| `/` | Protegida | Dashboard |
| `/users` | Protegida | Gestión de usuarios |
| `/resources` | Protegida | Cubículos |
| `/loans` | Protegida | Préstamos |
| `/reports` | Protegida | Reportes |

## Regla para archivos nuevos

Antes de crear un archivo, pregúntate:

1. ¿Se conecta a una API externa? → `/apis/<servicio>/`
2. ¿Es lógica/UI de un dominio específico? → `/features/<modulo>/`
3. ¿Se reutiliza en cualquier feature sin saber de negocio? → `/components/`

Si agregas una API nueva, replica el patrón `client → service → hook` y exporta desde `index.js`.
