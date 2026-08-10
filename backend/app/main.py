from __future__ import annotations

from fastapi import Depends, FastAPI, Header, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, StreamingResponse
from sqlalchemy.orm import Session

from .core.config import settings
from .supabase_auth import get_current_profile, require_roles
from .supabase_db import Base, engine, get_db, session_scope
from .supabase_models import Cubicle, Profile
from .supabase_schemas import (
    BookReserveCreate,
    BookReserveRead,
    CubicleStatusUpdate,
    CubicleReservationCompleteRead,
    ComputerLoanCreate,
    ComputerLoanRead,
    ComputerRead,
    LoanCreate,
    LoanReturnRead,
    ProfileCreate,
    ProfileRead,
    ProfileUpdate,
    ReportFilters,
    UserRead,
    UserCreate,
    UserUpdate,
)
from .supabase_services import (
    build_reports,
    create_cubicle_reservation,
    complete_cubicle_reservation,
    create_computer_loan,
    create_loan,
    reserve_book,
    create_profile,
    create_user,
    delete_profile,
    delete_user,
    export_reports_csv,
    get_cubicle,
    get_cubicle_occupancy,
    get_dashboard_metrics,
    get_loan,
    get_profile,
    get_profile_me,
    list_cubicles,
    list_computers,
    list_loans,
    list_profiles,
    return_loan,
    return_computer_loan,
    update_cubicle_status,
    update_profile,
    update_user,
    upsert_profile_me,
)


app = FastAPI(title=settings.app_name)

app.add_middleware(
    CORSMiddleware,
    allow_origins=list(settings.frontend_origins) or ['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.on_event('startup')
def startup() -> None:
    Base.metadata.create_all(bind=engine)


@app.get('/api/health')
def health() -> dict[str, str]:
    return {'status': 'ok'}


@app.get('/api/profiles/me', response_model=ProfileRead)
def read_profile_me(db: Session = Depends(get_db), authorization: str | None = Header(default=None)):
    profile = get_current_profile(db, authorization)
    return get_profile_me(db, profile)


@app.put('/api/profiles/me', response_model=ProfileRead)
def edit_profile_me(payload: ProfileUpdate, db: Session = Depends(get_db), authorization: str | None = Header(default=None)):
    profile = get_current_profile(db, authorization)
    return upsert_profile_me(db, profile, payload)


@app.get('/api/profiles', response_model=list[UserRead])
def read_profiles(db: Session = Depends(get_db), current_profile: Profile = Depends(require_roles('admin', 'staff'))):
    return list_profiles(db)


@app.post('/api/profiles', response_model=ProfileRead)
def add_profile(payload: ProfileCreate, db: Session = Depends(get_db), current_profile: Profile = Depends(require_roles('admin'))):
    return create_profile(db, payload)


@app.get('/api/profiles/{profile_id}', response_model=ProfileRead)
def read_profile(profile_id: str, db: Session = Depends(get_db), current_profile: Profile = Depends(require_roles('admin', 'staff'))):
    return get_profile(db, profile_id)


@app.put('/api/profiles/{profile_id}', response_model=ProfileRead)
def edit_profile(profile_id: str, payload: ProfileUpdate, db: Session = Depends(get_db), current_profile: Profile = Depends(require_roles('admin'))):
    return update_profile(db, profile_id, payload)


@app.delete('/api/profiles/{profile_id}')
def remove_profile(profile_id: str, db: Session = Depends(get_db), current_profile: Profile = Depends(require_roles('admin'))):
    return delete_profile(db, profile_id)


@app.get('/api/users')
def read_users(db: Session = Depends(get_db), current_profile: Profile = Depends(require_roles('admin', 'staff'))):
    return list_profiles(db)


@app.get('/api/users/me')
def read_user_me(db: Session = Depends(get_db), authorization: str | None = Header(default=None)):
    profile = get_current_profile(db, authorization)
    return get_profile_me(db, profile)


@app.put('/api/users/me')
def edit_user_me(payload: ProfileUpdate, db: Session = Depends(get_db), authorization: str | None = Header(default=None)):
    profile = get_current_profile(db, authorization)
    return upsert_profile_me(db, profile, payload)


@app.post('/api/users')
def add_user(payload: UserCreate, db: Session = Depends(get_db), current_profile: Profile = Depends(require_roles('admin', 'staff'))):
    return create_user(db, payload)


@app.put('/api/users/{user_id}')
def edit_user(user_id: str, payload: UserUpdate, db: Session = Depends(get_db), current_profile: Profile = Depends(require_roles('admin', 'staff'))):
    return update_user(db, user_id, payload)


@app.delete('/api/users/{user_id}')
def remove_user(user_id: str, db: Session = Depends(get_db), current_profile: Profile = Depends(require_roles('admin'))):
    return delete_user(db, user_id)


@app.get('/api/cubicles')
def read_cubicles(db: Session = Depends(get_db)):
    return list_cubicles(db)


@app.get('/api/cubicles/{cubicle_id}')
def read_cubicle(cubicle_id: str, db: Session = Depends(get_db)):
    return get_cubicle(db, cubicle_id)


@app.patch('/api/cubicles/{cubicle_id}/status')
def edit_cubicle_status(cubicle_id: str, payload: CubicleStatusUpdate, db: Session = Depends(get_db), current_profile: Profile = Depends(require_roles('admin', 'staff'))):
    return update_cubicle_status(db, cubicle_id, payload)


@app.post('/api/cubicles/{cubicle_id}/reservations')
def reserve_cubicle(cubicle_id: str, db: Session = Depends(get_db), authorization: str | None = Header(default=None)):
    current_profile = get_current_profile(db, authorization)
    return create_cubicle_reservation(db, cubicle_id, current_profile)


@app.post('/api/cubicles/{cubicle_id}/release', response_model=CubicleReservationCompleteRead)
def release_cubicle(cubicle_id: str, db: Session = Depends(get_db), authorization: str | None = Header(default=None)):
    current_profile = get_current_profile(db, authorization)
    return complete_cubicle_reservation(db, cubicle_id, current_profile)


@app.get('/api/cubicles/occupancy')
def read_cubicle_occupancy(db: Session = Depends(get_db)):
    return get_cubicle_occupancy(db)


@app.get('/api/computers', response_model=list[ComputerRead])
def read_computers(db: Session = Depends(get_db)):
    return list_computers(db)


@app.post('/api/computers/loans', response_model=ComputerLoanRead)
def add_computer_loan(payload: ComputerLoanCreate, db: Session = Depends(get_db), authorization: str | None = Header(default=None)):
    current_profile = get_current_profile(db, authorization)
    return create_computer_loan(db, payload, current_profile)


@app.post('/api/computers/loans/{loan_id}/complete', response_model=ComputerLoanRead)
def complete_computer_loan(loan_id: str, db: Session = Depends(get_db), authorization: str | None = Header(default=None)):
    current_profile = get_current_profile(db, authorization)
    return return_computer_loan(db, loan_id, current_profile)


@app.get('/api/loans')
def read_loans(db: Session = Depends(get_db), current_profile: Profile = Depends(require_roles('admin', 'staff'))):
    return list_loans(db)


@app.get('/api/loans/{loan_id}')
def read_loan(loan_id: str, db: Session = Depends(get_db), current_profile: Profile = Depends(require_roles('admin', 'staff'))):
    return get_loan(db, loan_id)


@app.post('/api/loans')
def add_loan(payload: LoanCreate, db: Session = Depends(get_db), authorization: str | None = Header(default=None)):
    current_profile = get_current_profile(db, authorization)
    return create_loan(db, payload, current_profile)


@app.post('/api/loans/reserve-book', response_model=BookReserveRead)
def reserve_book_route(payload: BookReserveCreate, db: Session = Depends(get_db), authorization: str | None = Header(default=None)):
    current_profile = get_current_profile(db, authorization)
    return reserve_book(db, payload, current_profile)


@app.patch('/api/loans/{loan_id}/return')
def finish_loan(loan_id: str, db: Session = Depends(get_db), authorization: str | None = Header(default=None)) -> LoanReturnRead:
    current_profile = get_current_profile(db, authorization)
    return return_loan(db, loan_id, current_profile)


@app.get('/api/reports')
def read_reports(
    from_date: str | None = Query(default=None, alias='from'),
    to_date: str | None = Query(default=None, alias='to'),
    report_type: str = Query(default='all', alias='type'),
    db: Session = Depends(get_db),
    current_profile: Profile = Depends(require_roles('admin', 'staff')),
):
    filters = ReportFilters.model_validate({'from': from_date, 'to': to_date, 'type': report_type})
    return build_reports(db, filters)


@app.get('/api/reports/export')
def export_reports(
    from_date: str | None = Query(default=None, alias='from'),
    to_date: str | None = Query(default=None, alias='to'),
    report_type: str = Query(default='all', alias='type'),
    format: str = Query(default='csv'),
    db: Session = Depends(get_db),
    current_profile: Profile = Depends(require_roles('admin', 'staff')),
):
    filters = ReportFilters.model_validate({'from': from_date, 'to': to_date, 'type': report_type})
    if format.lower() != 'csv':
        return JSONResponse(status_code=400, content={'detail': 'Only csv export is supported'})
    content = export_reports_csv(db, filters)
    return StreamingResponse(
        iter([content]),
        media_type='text/csv; charset=utf-8',
        headers={'Content-Disposition': 'attachment; filename="sara-report.csv"'},
    )


@app.get('/api/reports/dashboard')
def dashboard(db: Session = Depends(get_db)):
    return get_dashboard_metrics(db)
