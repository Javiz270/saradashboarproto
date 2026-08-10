from __future__ import annotations

from datetime import datetime

from pydantic import BaseModel, ConfigDict, Field


class ProfileBase(BaseModel):
    first_name: str | None = None
    last_name_paternal: str | None = None
    last_name_maternal: str | None = None
    career: str | None = None
    grade: str | None = None
    group: str | None = Field(default=None, alias='group')
    student_id: str | None = None
    email: str
    avatar_url: str | None = None
    role: str = 'student'
    status: str = 'active'


class ProfileCreate(ProfileBase):
    pass


class ProfileUpdate(BaseModel):
    first_name: str | None = None
    last_name_paternal: str | None = None
    last_name_maternal: str | None = None
    career: str | None = None
    grade: str | None = None
    group: str | None = Field(default=None, alias='group')
    student_id: str | None = None
    email: str | None = None
    avatar_url: str | None = None
    role: str | None = None
    status: str | None = None


class ProfileRead(ProfileBase):
    model_config = ConfigDict(from_attributes=True)

    id: str
    created_at: datetime
    updated_at: datetime


class UserRead(BaseModel):
    id: str
    name: str
    email: str
    role: str
    status: str
    avatarUrl: str | None = None


class UserCreate(BaseModel):
    name: str
    email: str
    role: str = 'student'
    status: str = 'active'
    avatarUrl: str | None = None


class UserUpdate(BaseModel):
    name: str | None = None
    email: str | None = None
    role: str | None = None
    status: str | None = None
    avatarUrl: str | None = None


class CubicleStatusUpdate(BaseModel):
    status: str


class CubicleReservationCompleteRead(BaseModel):
    cubicle_id: str
    status: str
    releasedAt: datetime


class CubicleRead(BaseModel):
    id: str
    code: str
    name: str | None = None
    capacity: int
    status: str
    user: str | None = None
    userId: str | None = None


class OccupancyRead(BaseModel):
    occupied: int
    total: int
    available: int
    reserved: int
    maintenance: int
    occupancyRate: float


class LoanCreate(BaseModel):
    copy_id: str
    user_id: str
    due_date: datetime
    notes: str | None = None


class BookReserveCreate(BaseModel):
    title: str
    authors: list[str] = Field(default_factory=list)
    isbn: str | None = None
    cover_url: str | None = None
    user_id: str


class LoanRead(BaseModel):
    id: str
    copy_id: str
    bookTitle: str
    userName: str
    loanDate: datetime
    dueDate: datetime
    returnDate: datetime | None = None
    status: str
    notes: str | None = None


class BookReserveRead(LoanRead):
    resource_id: str
    internal_code: str


class LoanReturnRead(BaseModel):
    id: str
    status: str
    returnedAt: datetime


class ComputerRead(BaseModel):
    id: str
    code: str
    name: str | None = None
    status: str


class ComputerLoanCreate(BaseModel):
    computer_id: str
    user_id: str


class ComputerLoanRead(BaseModel):
    id: str
    computer_id: str
    user_id: str
    registered_by: str
    start_time: datetime
    end_time: datetime | None = None
    status: str


class ReportFilters(BaseModel):
    fromDate: datetime | None = Field(default=None, alias='from')
    toDate: datetime | None = Field(default=None, alias='to')
    type: str = 'all'


class ReportItem(BaseModel):
    type: str
    id: str
    title: str
    description: str | None = None
    status: str | None = None
    date: datetime
    payload: dict[str, str] = Field(default_factory=dict)


class ReportSummary(BaseModel):
    access: int
    loans: int
    cubicles: int


class ReportRead(BaseModel):
    filters: ReportFilters
    generatedAt: datetime
    summary: ReportSummary
    items: list[ReportItem]


class DashboardMetricsRead(BaseModel):
    cubiclesOccupied: int
    cubiclesTotal: int
    activeLoans: int
    usersToday: int
    occupancyRate: float
    generatedAt: datetime
