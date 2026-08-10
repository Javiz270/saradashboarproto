import os
from typing import Any

from fastapi import HTTPException, Security, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jose import JWTError, jwt

# Using the standard Bearer token scheme
security = HTTPBearer()

# We need the Supabase JWT secret to verify the tokens offline
# Make sure to set this in the environment variables (e.g. .env)
SUPABASE_JWT_SECRET = os.getenv(
    "SUPABASE_JWT_SECRET", 
    "super-secret-jwt-token-with-at-least-32-characters-long"
)


def verify_supabase_token(token: str) -> dict[str, Any]:
    """
    Verifies the JWT token from Supabase using the HS256 algorithm and the JWT secret.
    Returns the decoded payload if valid, otherwise raises HTTP 401.
    """
    try:
        # Supabase uses HS256 and the audience is 'authenticated' by default
        payload = jwt.decode(
            token,
            SUPABASE_JWT_SECRET,
            algorithms=["HS256"],
            options={"verify_aud": False}, # Usually aud is 'authenticated'
        )
        return payload
    except JWTError as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Could not validate credentials: {str(e)}",
            headers={"WWW-Authenticate": "Bearer"},
        )


def get_token_from_header(credentials: HTTPAuthorizationCredentials = Security(security)) -> str:
    """Extracts the Bearer token from the request header."""
    return credentials.credentials


def get_user_id_from_token(payload: dict[str, Any]) -> str:
    """Extracts the user ID (sub) from the JWT payload."""
    user_id = payload.get("sub")
    if not user_id:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token payload missing 'sub' (user_id).",
            headers={"WWW-Authenticate": "Bearer"},
        )
    return user_id
