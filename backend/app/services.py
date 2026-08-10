from __future__ import annotations

import uuid
from datetime import datetime, timezone

from fastapi import HTTPException, status
from sqlalchemy import and_, select, func
from sqlalchemy.orm import Session

from app.models import (
    BookCopy,
    Computer,
    ComputerLoan,
    Cubicle,
    CubicleReservation,
    Loan,
    Profile,
    Visitor,
)
from app.schemas import (
    ComputerLoanCreate,
    CubicleReservationCreate,
    LoanCreate,
    ProfileUpdate,
    VisitorCreate,
    DashboardMetricsRead,
)


def _utc_now() -> datetime:
    return datetime.now(timezone.utc)


def get_profile(db: Session, user_id: uuid.UUID) -> Profile:
    profile = db.get(Profile, user_id)
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    return profile


def update_profile(db: Session, user_id: uuid.UUID, payload: ProfileUpdate) -> Profile:
    profile = get_profile(db, user_id)
    for field, value in payload.model_dump(exclude_unset=True).items():
        setattr(profile, field, value)
    db.commit()
    db.refresh(profile)
    return profile


# --- Cubicles ---
def list_cubicles(db: Session) -> list[Cubicle]:
    return db.scalars(select(Cubicle).order_by(Cubicle.code.asc())).all()


def reserve_cubicle(db: Session, payload: CubicleReservationCreate, registered_by_id: uuid.UUID) -> CubicleReservation:
    cubicle = db.get(Cubicle, payload.cubicle_id)
    if not cubicle:
        raise HTTPException(status_code=404, detail="Cubicle not found")
    if cubicle.is_maintenance:
        raise HTTPException(status_code=400, detail="Cubicle is in maintenance")

    # Lock the row for update to prevent race conditions
    active_res = db.execute(
        select(CubicleReservation)
        .where(
            and_(
                CubicleReservation.cubicle_id == payload.cubicle_id,
                CubicleReservation.status == "active",
            )
        )
        .with_for_update()
    ).scalar_one_or_none()

    if active_res:
        raise HTTPException(status_code=409, detail="Cubicle is already occupied")

    reservation = CubicleReservation(
        cubicle_id=payload.cubicle_id,
        user_id=payload.user_id,
        registered_by=registered_by_id,
        start_time=_utc_now(),
        status="active",
    )
    db.add(reservation)
    db.commit()
    db.refresh(reservation)
    return reservation


def complete_cubicle_reservation(db: Session, reservation_id: uuid.UUID) -> CubicleReservation:
    reservation = db.execute(
        select(CubicleReservation).where(CubicleReservation.id == reservation_id).with_for_update()
    ).scalar_one_or_none()
    
    if not reservation:
        raise HTTPException(status_code=404, detail="Reservation not found")

    reservation.status = "completed"
    reservation.end_time = _utc_now()
    db.commit()
    db.refresh(reservation)
    return reservation


# --- Loans ---
def create_loan(db: Session, payload: LoanCreate, registered_by_id: uuid.UUID) -> Loan:
    copy = db.get(BookCopy, payload.copy_id)
    if not copy:
        raise HTTPException(status_code=404, detail="Book copy not found")
    if copy.is_maintenance:
        raise HTTPException(status_code=400, detail="Book copy is in maintenance")

    active_loan = db.execute(
        select(Loan)
        .where(and_(Loan.copy_id == payload.copy_id, Loan.status == "active"))
        .with_for_update()
    ).scalar_one_or_none()

    if active_loan:
        raise HTTPException(status_code=409, detail="Book copy is already loaned out")

    loan = Loan(
        copy_id=payload.copy_id,
        user_id=payload.user_id,
        registered_by=registered_by_id,
        due_date=payload.due_date,
        notes=payload.notes,
        status="active",
    )
    db.add(loan)
    db.commit()
    db.refresh(loan)
    return loan


def return_loan(db: Session, loan_id: uuid.UUID) -> Loan:
    loan = db.execute(
        select(Loan).where(Loan.id == loan_id).with_for_update()
    ).scalar_one_or_none()
    
    if not loan:
        raise HTTPException(status_code=404, detail="Loan not found")
        
    loan.status = "returned"
    loan.return_date = _utc_now()
    db.commit()
    db.refresh(loan)
    return loan


# --- Computers ---
def create_computer_loan(db: Session, payload: ComputerLoanCreate, registered_by_id: uuid.UUID) -> ComputerLoan:
    comp = db.get(Computer, payload.computer_id)
    if not comp:
        raise HTTPException(status_code=404, detail="Computer not found")
    if comp.is_maintenance:
        raise HTTPException(status_code=400, detail="Computer is in maintenance")

    active_loan = db.execute(
        select(ComputerLoan)
        .where(and_(ComputerLoan.computer_id == payload.computer_id, ComputerLoan.status == "active"))
        .with_for_update()
    ).scalar_one_or_none()

    if active_loan:
        raise HTTPException(status_code=409, detail="Computer is already in use")

    loan = ComputerLoan(
        computer_id=payload.computer_id,
        user_id=payload.user_id,
        registered_by=registered_by_id,
        status="active",
    )
    db.add(loan)
    db.commit()
    db.refresh(loan)
    return loan


def return_computer_loan(db: Session, loan_id: uuid.UUID) -> ComputerLoan:
    loan = db.execute(
        select(ComputerLoan).where(ComputerLoan.id == loan_id).with_for_update()
    ).scalar_one_or_none()
    
    if not loan:
        raise HTTPException(status_code=404, detail="Computer loan not found")
        
    loan.status = "completed"
    loan.end_time = _utc_now()
    db.commit()
    db.refresh(loan)
    return loan


# --- Visitors ---
def create_visitor(db: Session, payload: VisitorCreate, registered_by_id: uuid.UUID) -> Visitor:
    visitor = Visitor(
        event_id=payload.event_id,
        full_name=payload.full_name,
        email=payload.email,
        institution=payload.institution,
        registered_by=registered_by_id,
    )
    db.add(visitor)
    db.commit()
    db.refresh(visitor)
    return visitor


# --- Dashboard ---
def get_dashboard_metrics(db: Session) -> DashboardMetricsRead:
    total_cubicles = db.scalar(select(func.count()).select_from(Cubicle)) or 0
    occupied_cubicles = db.scalar(
        select(func.count()).select_from(CubicleReservation).where(CubicleReservation.status == "active")
    ) or 0
    active_loans = db.scalar(
        select(func.count()).select_from(Loan).where(Loan.status == "active")
    ) or 0
    
    today_start = datetime.now(timezone.utc).replace(hour=0, minute=0, second=0, microsecond=0)
    users_today = db.scalar(
        select(func.count()).select_from(Profile).where(Profile.created_at >= today_start)
    ) or 0
    
    occupancy_rate = round((occupied_cubicles / total_cubicles) * 100, 2) if total_cubicles else 0.0

    return DashboardMetricsRead(
        cubiclesOccupied=occupied_cubicles,
        cubiclesTotal=total_cubicles,
        activeLoans=active_loans,
        usersToday=users_today,
        occupancyRate=occupancy_rate,
        generatedAt=_utc_now(),
    )
