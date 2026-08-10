from __future__ import annotations

import base64
import json
import uuid

from fastapi import Depends, Header, HTTPException, status
from sqlalchemy.orm import Session

from .supabase_db import get_db
from .supabase_models import Profile


def _decode_jwt_payload(token: str) -> dict[str, object]:
    parts = token.split('.')
    if len(parts) < 2:
      raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid bearer token')

    payload_part = parts[1]
    padding = '=' * (-len(payload_part) % 4)
    decoded = base64.urlsafe_b64decode(payload_part + padding)
    return json.loads(decoded.decode('utf-8'))


def get_current_claims(authorization: str | None = Header(default=None)) -> dict[str, object]:
    if not authorization or not authorization.startswith('Bearer '):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Missing bearer token')
    return _decode_jwt_payload(authorization.removeprefix('Bearer ').strip())


def get_current_profile(
    db: Session = Depends(get_db),
    authorization: str | None = Header(default=None),
) -> Profile:
    claims = get_current_claims(authorization)
    subject = claims.get('sub')
    if not subject:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Token missing subject')

    try:
        profile_id = uuid.UUID(str(subject))
    except ValueError as exc:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid user id in token') from exc

    profile = db.get(Profile, profile_id)
    if not profile:
        email = str(claims.get('email') or '')
        profile = Profile(
            id=profile_id,
            first_name=str(claims.get('given_name') or claims.get('name') or email.split('@')[0] or 'Usuario'),
            email=email or f'{profile_id}@invalid.local',
            role='student',
            status='active',
        )
        db.add(profile)
        db.commit()
        db.refresh(profile)

    return profile


def require_roles(*allowed_roles: str):
    def dependency(profile: Profile = Depends(get_current_profile)) -> Profile:
        if profile.role not in allowed_roles:
            raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail='Insufficient permissions')
        return profile

    return dependency
