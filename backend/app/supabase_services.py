from __future__ import annotations

import base64
import csv
import io
import json
import uuid
from datetime import date, datetime, timezone, timedelta

from fastapi import HTTPException, status
from sqlalchemy import and_, func, select
from sqlalchemy.orm import Session

from .supabase_models import (
    BookCopy,
    Computer,
    ComputerLoan,
    Cubicle,
    CubicleReservation,
    Loan,
    Profile,
    Resource,
)
from .supabase_schemas import (
    CubicleRead,
    CubicleStatusUpdate,
    CubicleReservationCompleteRead,
    BookReserveCreate,
    BookReserveRead,
    ComputerLoanCreate,
    ComputerLoanRead,
    ComputerRead,
    DashboardMetricsRead,
    LoanCreate,
    LoanRead,
    LoanReturnRead,
    OccupancyRead,
    ProfileCreate,
    ProfileRead,
    ProfileUpdate,
    ReportFilters,
    ReportItem,
    ReportRead,
    ReportSummary,
    UserCreate,
    UserRead,
    UserUpdate,
)


def _uuid(value: str | uuid.UUID) -> uuid.UUID:
    return value if isinstance(value, uuid.UUID) else uuid.UUID(str(value))


def _now() -> datetime:
    return datetime.now(timezone.utc)


def _decode_claims(authorization: str | None) -> dict[str, object]:
    if not authorization or not authorization.startswith('Bearer '):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Missing bearer token')
    token = authorization.removeprefix('Bearer ').strip()
    parts = token.split('.')
    if len(parts) < 2:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Invalid bearer token')
    padding = '=' * (-len(parts[1]) % 4)
    payload = base64.urlsafe_b64decode(parts[1] + padding)
    return json.loads(payload.decode('utf-8'))


def get_current_profile(db: Session, authorization: str | None) -> Profile:
    claims = _decode_claims(authorization)
    subject = claims.get('sub')
    if not subject:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail='Token missing subject')
    profile_id = _uuid(subject)
    profile = db.get(Profile, profile_id)
    if profile:
        return profile

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


def require_role(profile: Profile, allowed: set[str]) -> None:
    if profile.role not in allowed:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail='Insufficient permissions')


def profile_to_read(profile: Profile) -> ProfileRead:
    return ProfileRead(
        id=str(profile.id),
        first_name=profile.first_name,
        last_name_paternal=profile.last_name_paternal,
        last_name_maternal=profile.last_name_maternal,
        career=profile.career,
        grade=profile.grade,
        group=profile.group,
        student_id=profile.student_id,
        email=profile.email,
        avatar_url=profile.avatar_url,
        role=profile.role,
        status=profile.status,
        created_at=profile.created_at,
        updated_at=profile.updated_at,
    )


def profile_to_user(profile: Profile) -> UserRead:
    name_parts = [profile.first_name, profile.last_name_paternal, profile.last_name_maternal]
    name = ' '.join([part for part in name_parts if part]) or profile.email.split('@')[0]
    return UserRead(id=str(profile.id), name=name, email=profile.email, role=profile.role, status=profile.status, avatarUrl=profile.avatar_url)


def upsert_profile_me(db: Session, profile: Profile, payload: ProfileUpdate) -> ProfileRead:
    data = payload.model_dump(exclude_unset=True, by_alias=True)
    for field, value in data.items():
        if field == 'group':
            setattr(profile, 'group', value)
        else:
            setattr(profile, field, value)
    db.commit()
    db.refresh(profile)
    return profile_to_read(profile)


def get_profile_me(db: Session, current_profile: Profile) -> ProfileRead:
    return profile_to_read(current_profile)


def list_profiles(db: Session) -> list[UserRead]:
    profiles = db.scalars(select(Profile).order_by(Profile.created_at.desc())).all()
    return [profile_to_user(profile) for profile in profiles]


def get_profile(db: Session, profile_id: str) -> ProfileRead:
    profile = db.get(Profile, _uuid(profile_id))
    if not profile:
        raise HTTPException(status_code=404, detail='Profile not found')
    return profile_to_read(profile)


def create_profile(db: Session, payload: ProfileCreate) -> ProfileRead:
    profile = Profile(id=uuid.uuid4(), **payload.model_dump(by_alias=True))
    db.add(profile)
    db.commit()
    db.refresh(profile)
    return profile_to_read(profile)


def update_profile(db: Session, profile_id: str, payload: ProfileUpdate) -> ProfileRead:
    profile = db.get(Profile, _uuid(profile_id))
    if not profile:
        raise HTTPException(status_code=404, detail='Profile not found')
    return upsert_profile_me(db, profile, payload)


def delete_profile(db: Session, profile_id: str) -> dict[str, str]:
    profile = db.get(Profile, _uuid(profile_id))
    if not profile:
        raise HTTPException(status_code=404, detail='Profile not found')
    db.delete(profile)
    db.commit()
    return {'message': 'Profile deleted'}


def create_user(db: Session, payload: UserCreate) -> UserRead:
    first_name = payload.name.split(' ')[0] if payload.name else payload.email.split('@')[0]
    profile = Profile(
        id=uuid.uuid4(),
        first_name=first_name,
        email=payload.email,
        role=payload.role,
        status=payload.status,
        avatar_url=payload.avatarUrl,
    )
    db.add(profile)
    db.commit()
    db.refresh(profile)
    return profile_to_user(profile)


def update_user(db: Session, profile_id: str, payload: UserUpdate) -> UserRead:
    profile = db.get(Profile, _uuid(profile_id))
    if not profile:
        raise HTTPException(status_code=404, detail='Profile not found')
    if payload.name is not None:
        profile.first_name = payload.name
    if payload.email is not None:
        profile.email = payload.email
    if payload.role is not None:
        profile.role = payload.role
    if payload.status is not None:
        profile.status = payload.status
    if payload.avatarUrl is not None:
        profile.avatar_url = payload.avatarUrl
    db.commit()
    db.refresh(profile)
    return profile_to_user(profile)


def delete_user(db: Session, profile_id: str) -> dict[str, str]:
    return delete_profile(db, profile_id)


def list_cubicles(db: Session) -> list[CubicleRead]:
    cubicles = db.scalars(select(Cubicle).order_by(Cubicle.code.asc())).all()
    now = _now()
    active_reservations = db.scalars(
        select(CubicleReservation).where(
            CubicleReservation.status == 'active',
            CubicleReservation.start_time <= now,
            (CubicleReservation.end_time.is_(None) | (CubicleReservation.end_time >= now)),
        )
    ).all()
    reservation_map = {reservation.cubicle_id: reservation for reservation in active_reservations}
    profiles = {profile.id: profile for profile in db.scalars(select(Profile)).all()}

    result: list[CubicleRead] = []
    for cubicle in cubicles:
        reservation = reservation_map.get(cubicle.id)
        status = 'maintenance' if cubicle.is_maintenance else ('occupied' if reservation else 'available')
        result.append(
            CubicleRead(
                id=str(cubicle.id),
                code=cubicle.code,
                name=cubicle.name,
                capacity=cubicle.capacity,
                status=status,
                user=profiles.get(reservation.user_id).first_name if reservation and profiles.get(reservation.user_id) else None,
                userId=str(reservation.user_id) if reservation else None,
            )
        )
    return result


def get_cubicle(db: Session, cubicle_id: str) -> CubicleRead:
    cubicle = db.get(Cubicle, _uuid(cubicle_id))
    if not cubicle:
        raise HTTPException(status_code=404, detail='Cubicle not found')
    return [item for item in list_cubicles(db) if item.id == str(cubicle.id)][0]


def update_cubicle_status(db: Session, cubicle_id: str, payload: CubicleStatusUpdate) -> CubicleRead:
    cubicle = db.get(Cubicle, _uuid(cubicle_id))
    if not cubicle:
        raise HTTPException(status_code=404, detail='Cubicle not found')
    cubicle.is_maintenance = payload.status == 'maintenance'
    db.commit()
    return get_cubicle(db, cubicle_id)


def get_cubicle_occupancy(db: Session) -> OccupancyRead:
    total = db.scalar(select(func.count()).select_from(Cubicle)) or 0
    maintenance = db.scalar(select(func.count()).select_from(Cubicle).where(Cubicle.is_maintenance.is_(True))) or 0
    occupied = db.scalar(
        select(func.count())
        .select_from(CubicleReservation)
        .where(CubicleReservation.status == 'active')
    ) or 0
    available = max(total - occupied - maintenance, 0)
    reserved = db.scalar(
        select(func.count())
        .select_from(CubicleReservation)
        .where(CubicleReservation.status == 'active', CubicleReservation.start_time > _now())
    ) or 0
    occupancy_rate = round((occupied / total) * 100, 2) if total else 0.0
    return OccupancyRead(
        occupied=occupied,
        total=total,
        available=available,
        reserved=reserved,
        maintenance=maintenance,
        occupancyRate=occupancy_rate,
    )


def create_cubicle_reservation(db: Session, cubicle_id: str, current_profile: Profile, user_id: str | None = None) -> CubicleRead:
    require_role(current_profile, {'staff', 'admin'})
    cubicle = db.get(Cubicle, _uuid(cubicle_id))
    if not cubicle:
        raise HTTPException(status_code=404, detail='Cubicle not found')
    reservation = CubicleReservation(
        id=uuid.uuid4(),
        cubicle_id=cubicle.id,
        user_id=_uuid(user_id) if user_id else current_profile.id,
        registered_by=current_profile.id,
        status='active',
    )
    db.add(reservation)
    db.commit()
    return get_cubicle(db, cubicle_id)


def complete_cubicle_reservation(db: Session, cubicle_id: str, current_profile: Profile) -> CubicleReservationCompleteRead:
    require_role(current_profile, {'staff', 'admin'})
    cubicle = db.get(Cubicle, _uuid(cubicle_id))
    if not cubicle:
        raise HTTPException(status_code=404, detail='Cubicle not found')
    reservation = db.scalar(
        select(CubicleReservation).where(
            CubicleReservation.cubicle_id == cubicle.id,
            CubicleReservation.status == 'active',
            CubicleReservation.end_time.is_(None),
        ).order_by(CubicleReservation.start_time.desc())
    )
    if not reservation:
        raise HTTPException(status_code=404, detail='Active reservation not found')
    reservation.status = 'completed'
    reservation.end_time = _now()
    db.commit()
    return CubicleReservationCompleteRead(cubicle_id=str(cubicle.id), status='available', releasedAt=reservation.end_time)


def list_loans(db: Session) -> list[LoanRead]:
    rows = db.execute(
        select(Loan, BookCopy.internal_code, Resource.title, Profile.first_name, Profile.last_name_paternal)
        .join(BookCopy, Loan.copy_id == BookCopy.id)
        .join(Resource, BookCopy.resource_id == Resource.id)
        .join(Profile, Loan.user_id == Profile.id)
        .order_by(Loan.loan_date.desc())
    ).all()
    result: list[LoanRead] = []
    for loan, internal_code, title, first_name, paternal in rows:
        result.append(
            LoanRead(
                id=str(loan.id),
                copy_id=str(loan.copy_id),
                bookTitle=title,
                userName=' '.join([part for part in [first_name, paternal] if part]),
                loanDate=loan.loan_date,
                dueDate=loan.due_date,
                returnDate=loan.return_date,
                status=loan.status,
                notes=loan.notes,
            )
        )
    return result


def get_loan(db: Session, loan_id: str) -> LoanRead:
    loan = db.get(Loan, _uuid(loan_id))
    if not loan:
        raise HTTPException(status_code=404, detail='Loan not found')
    loans = list_loans(db)
    for item in loans:
        if item.id == str(loan.id):
            return item
    raise HTTPException(status_code=404, detail='Loan not found')


def create_loan(db: Session, payload: LoanCreate, current_profile: Profile) -> LoanRead:
    require_role(current_profile, {'staff', 'admin'})
    active_loan = db.scalar(select(Loan).where(Loan.copy_id == _uuid(payload.copy_id), Loan.status == 'active'))
    if active_loan:
        raise HTTPException(status_code=409, detail='This copy already has an active loan')
    loan = Loan(
        id=uuid.uuid4(),
        copy_id=_uuid(payload.copy_id),
        user_id=_uuid(payload.user_id),
        registered_by=current_profile.id,
        due_date=payload.due_date,
        notes=payload.notes,
        status='active',
    )
    db.add(loan)
    db.commit()
    db.refresh(loan)
    return get_loan(db, str(loan.id))


def reserve_book(db: Session, payload: BookReserveCreate, current_profile: Profile) -> BookReserveRead:
    require_role(current_profile, {'staff', 'admin'})

    normalized_isbn = payload.isbn.strip() if payload.isbn else None
    resource = None
    if normalized_isbn:
        resource = db.scalar(select(Resource).where(Resource.isbn == normalized_isbn))
    if resource is None:
        resource = db.scalar(select(Resource).where(Resource.title == payload.title))
    if resource is None:
        resource = Resource(
            id=uuid.uuid4(),
            title=payload.title,
            authors=payload.authors,
            isbn=normalized_isbn,
            cover_url=payload.cover_url,
        )
        db.add(resource)
        db.flush()

    copy = db.scalar(select(BookCopy).where(BookCopy.resource_id == resource.id).order_by(BookCopy.created_at.asc()))
    if copy is None:
        copy = BookCopy(
            id=uuid.uuid4(),
            resource_id=resource.id,
            internal_code=(normalized_isbn or f'BK-{str(resource.id)[:8].upper()}'),
            is_maintenance=False,
        )
        db.add(copy)
        db.flush()

    existing_active_loan = db.scalar(select(Loan).where(Loan.copy_id == copy.id, Loan.status == 'active'))
    if existing_active_loan:
        raise HTTPException(status_code=409, detail='This book already has an active loan')

    loan = Loan(
        id=uuid.uuid4(),
        copy_id=copy.id,
        user_id=current_profile.id if current_profile.role in {'staff', 'admin'} else _uuid(payload.user_id),
        registered_by=current_profile.id,
        due_date=_now() + timedelta(days=14),
        status='active',
    )
    db.add(loan)
    db.commit()
    db.refresh(loan)

    user_profile = db.get(Profile, loan.user_id)
    return BookReserveRead(
        id=str(loan.id),
        copy_id=str(loan.copy_id),
        bookTitle=resource.title,
        userName=' '.join([part for part in [user_profile.first_name if user_profile else None, user_profile.last_name_paternal if user_profile else None] if part]).strip() or user_profile.email if user_profile else 'Usuario',
        loanDate=loan.loan_date,
        dueDate=loan.due_date,
        returnDate=loan.return_date,
        status=loan.status,
        notes=loan.notes,
        resource_id=str(resource.id),
        internal_code=copy.internal_code,
    )


def return_loan(db: Session, loan_id: str, current_profile: Profile) -> LoanReturnRead:
    require_role(current_profile, {'staff', 'admin'})
    loan = db.get(Loan, _uuid(loan_id))
    if not loan:
        raise HTTPException(status_code=404, detail='Loan not found')
    loan.status = 'returned'
    loan.return_date = _now()
    db.commit()
    db.refresh(loan)
    return LoanReturnRead(id=str(loan.id), status=loan.status, returnedAt=loan.return_date)


def build_reports(db: Session, filters: ReportFilters) -> ReportRead:
    profiles = db.scalars(select(Profile)).all()
    loans = list_loans(db)
    cubicles = list_cubicles(db)
    items: list[ReportItem] = []

    if filters.type in {'all', 'access'}:
        for profile in profiles:
            if not filters.fromDate or profile.created_at >= filters.fromDate:
                if not filters.toDate or profile.created_at <= filters.toDate:
                    items.append(ReportItem(type='access', id=str(profile.id), title=profile_to_user(profile).name, description=profile.role, status=profile.status, date=profile.created_at, payload={'email': profile.email}))

    if filters.type in {'all', 'loans'}:
        for loan in loans:
            if not filters.fromDate or loan.loanDate >= filters.fromDate:
                if not filters.toDate or loan.loanDate <= filters.toDate:
                    items.append(ReportItem(type='loans', id=loan.id, title=loan.bookTitle, description=loan.userName, status=loan.status, date=loan.loanDate, payload={'copyId': loan.copy_id}))

    if filters.type in {'all', 'cubicles'}:
        for cubicle in cubicles:
            items.append(ReportItem(type='cubicles', id=cubicle.id, title=cubicle.code, description=cubicle.name, status=cubicle.status, date=_now(), payload={'capacity': str(cubicle.capacity)}))

    summary = ReportSummary(
        access=len([item for item in items if item.type == 'access']),
        loans=len([item for item in items if item.type == 'loans']),
        cubicles=len([item for item in items if item.type == 'cubicles']),
    )
    return ReportRead(filters=filters, generatedAt=_now(), summary=summary, items=items)


def export_reports_csv(db: Session, filters: ReportFilters) -> str:
    report = build_reports(db, filters)
    buffer = io.StringIO()
    writer = csv.DictWriter(buffer, fieldnames=['type', 'id', 'title', 'description', 'status', 'date', 'payload'])
    writer.writeheader()
    for item in report.items:
        writer.writerow({
            'type': item.type,
            'id': item.id,
            'title': item.title,
            'description': item.description or '',
            'status': item.status or '',
            'date': item.date.isoformat(),
            'payload': json.dumps(item.payload),
        })
    return buffer.getvalue()


def get_dashboard_metrics(db: Session) -> DashboardMetricsRead:
    occupancy = get_cubicle_occupancy(db)
    active_loans = db.scalar(select(func.count()).select_from(Loan).where(Loan.status == 'active')) or 0
    today = date.today()
    users_today = db.scalar(
        select(func.count()).select_from(Profile).where(func.date(Profile.created_at) == today)
    ) or 0
    return DashboardMetricsRead(
        cubiclesOccupied=occupancy.occupied,
        cubiclesTotal=occupancy.total,
        activeLoans=active_loans,
        usersToday=users_today,
        occupancyRate=occupancy.occupancyRate,
        generatedAt=_now(),
    )


def list_computers(db: Session) -> list[ComputerRead]:
    computers = db.scalars(select(Computer).order_by(Computer.code.asc())).all()
    active_loans = {
        loan.computer_id: loan
        for loan in db.scalars(select(ComputerLoan).where(ComputerLoan.status == 'active')).all()
    }
    result: list[ComputerRead] = []
    for computer in computers:
        loan = active_loans.get(computer.id)
        status = 'maintenance' if computer.is_maintenance else ('occupied' if loan else 'available')
        result.append(ComputerRead(id=str(computer.id), code=computer.code, name=computer.name, status=status))
    return result


def create_computer_loan(db: Session, payload: ComputerLoanCreate, current_profile: Profile) -> ComputerLoanRead:
    require_role(current_profile, {'staff', 'admin'})
    computer = db.get(Computer, _uuid(payload.computer_id))
    if not computer:
        raise HTTPException(status_code=404, detail='Computer not found')
    active_loan = db.scalar(select(ComputerLoan).where(ComputerLoan.computer_id == computer.id, ComputerLoan.status == 'active'))
    if active_loan:
        raise HTTPException(status_code=409, detail='This computer already has an active loan')
    loan = ComputerLoan(
        id=uuid.uuid4(),
        computer_id=computer.id,
        user_id=_uuid(payload.user_id),
        registered_by=current_profile.id,
        status='active',
    )
    db.add(loan)
    db.commit()
    db.refresh(loan)
    return ComputerLoanRead(
        id=str(loan.id),
        computer_id=str(loan.computer_id),
        user_id=str(loan.user_id),
        registered_by=str(loan.registered_by),
        start_time=loan.start_time,
        end_time=loan.end_time,
        status=loan.status,
    )


def return_computer_loan(db: Session, loan_id: str, current_profile: Profile) -> ComputerLoanRead:
    require_role(current_profile, {'staff', 'admin'})
    loan = db.get(ComputerLoan, _uuid(loan_id))
    if not loan:
        raise HTTPException(status_code=404, detail='Computer loan not found')
    loan.status = 'completed'
    loan.end_time = _now()
    db.commit()
    db.refresh(loan)
    return ComputerLoanRead(
        id=str(loan.id),
        computer_id=str(loan.computer_id),
        user_id=str(loan.user_id),
        registered_by=str(loan.registered_by),
        start_time=loan.start_time,
        end_time=loan.end_time,
        status=loan.status,
    )
