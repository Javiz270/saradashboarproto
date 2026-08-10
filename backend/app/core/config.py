from __future__ import annotations

import os
from dataclasses import dataclass
from dotenv import load_dotenv

load_dotenv()


def _get_bool(name: str, default: bool = False) -> bool:
    value = os.getenv(name)
    if value is None:
        return default
    return value.strip().lower() in {"1", "true", "yes", "on"}


def _get_list(name: str, default: list[str]) -> list[str]:
    value = os.getenv(name)
    if not value:
        return default
    return [item.strip() for item in value.split(",") if item.strip()]


@dataclass(frozen=True)
class Settings:
    api_prefix: str = os.getenv("API_PREFIX", "/api")
    database_url: str = os.getenv("DATABASE_URL", "sqlite:///./sara.db")
    frontend_origins: tuple[str, ...] = tuple(
        _get_list(
            "FRONTEND_ORIGINS",
            ["http://localhost:5173", "http://127.0.0.1:5173"],
        )
    )
    seed_demo_data: bool = _get_bool("SEED_DEMO_DATA", True)
    app_name: str = os.getenv("APP_NAME", "S.A.R.A. API")


settings = Settings()
