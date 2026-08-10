import uuid
from typing import Annotated

from fastapi import Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.db import get_db
from app.models import Profile
from app.core.security import get_token_from_header, get_user_id_from_token, verify_supabase_token


class CurrentUser:
    """Represents the currently authenticated user extracted from the database."""
    def __init__(self, id: uuid.UUID, role: str, email: str, profile: Profile):
        self.id = id
        self.role = role
        self.email = email
        self.profile = profile


def _profile_seed_from_token(payload: dict[str, object], user_id: uuid.UUID) -> dict[str, object]:
    user_metadata = payload.get("user_metadata")
    if not isinstance(user_metadata, dict):
        user_metadata = {}

    email = payload.get("email")
    if not isinstance(email, str) or not email:
        email = f"{user_id}@unknown.local"

    first_name = (
        user_metadata.get("given_name")
        or user_metadata.get("full_name")
        or user_metadata.get("name")
        or email.split("@")[0]
    )

    avatar_url = user_metadata.get("avatar_url") or user_metadata.get("picture")

    return {
        "id": user_id,
        "email": email,
        "first_name": first_name,
        "avatar_url": avatar_url,
        "role": "student",
        "status": "active",
    }


def get_current_user(
    token: str = Depends(get_token_from_header),
    db: Session = Depends(get_db)
) -> CurrentUser:
    """
    Dependency that extracts the JWT, verifies it offline, and queries the database
    to retrieve the authoritative role and profile data.
    """
    payload = verify_supabase_token(token)
    user_id = uuid.UUID(get_user_id_from_token(payload))

    # We must fetch the authoritative profile from our DB, NOT trust the JWT's role.
    profile = db.query(Profile).filter(Profile.id == user_id).first()

    if not profile:
        profile = Profile(**_profile_seed_from_token(payload, user_id))
        db.add(profile)
        db.commit()
        db.refresh(profile)

    if profile.status != "active":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="User account is suspended or inactive.",
        )

    return CurrentUser(
        id=profile.id,
        role=profile.role,
        email=profile.email,
        profile=profile
    )


# Dependency shorthand
UserDep = Annotated[CurrentUser, Depends(get_current_user)]


def require_role(*allowed_roles: str):
    """
    Factory that returns a dependency which checks that the current user
    has one of the allowed roles.
    """
    def _guard(user: UserDep) -> CurrentUser:
        if user.role not in allowed_roles:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="You do not have permission to perform this action.",
            )
        return user

    return _guard


require_staff = require_role("staff", "admin")
require_admin = require_role("admin")

StaffDep = Annotated[CurrentUser, Depends(require_staff)]
AdminDep = Annotated[CurrentUser, Depends(require_admin)]
