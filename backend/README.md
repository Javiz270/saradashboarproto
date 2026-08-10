# Backend S.A.R.A.

API REST en FastAPI para el módulo web. La base de datos se conecta por `DATABASE_URL`, así que puedes usar la cadena de conexión de Supabase Postgres sin cambiar el código.

## Requisitos

- Python 3.14+
- Variables de entorno definidas en `.env`

## Variables

- `DATABASE_URL`: cadena de conexión de la base de datos. Para Supabase, usa el connection string de Postgres.
- `FRONTEND_ORIGINS`: orígenes permitidos por CORS, separados por coma.
- `SEED_DEMO_DATA`: `true` para cargar datos de ejemplo en una base vacía.

## Levantar localmente

```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

## Endpoints

- `GET /api/health`
- `GET /api/users`
- `GET /api/cubicles`
- `GET /api/loans`
- `GET /api/reports`
- `GET /api/reports/export`
- `GET /api/reports/dashboard`

## Nota

La app frontend ya apunta por defecto a `http://localhost:8000/api`, así que con este backend levantado debería consumirlo sin cambios.
