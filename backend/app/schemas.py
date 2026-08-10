from __future__ import annotations

import uuid
from datetime import datetime
from typing import Any, List, Literal, Optional

from pydantic import BaseModel, ConfigDict, EmailStr, Field

UserRole = Literal["student", "staff", "admin"]
UserStatus = Literal["active", "inactive", "suspended"]
LoanStatus = Literal["active", "returned", "overdue"]
CubicleReservationStatus = Literal["active", "completed", "cancelled"]
ComputerLoanStatus = Literal["active", "completed"]


class ProfileBase(BaseModel):
    first_name: Optional[str] = None
    last_name_paternal: Optional[str] = None
    last_name_maternal: Optional[str] = None
    career: Optional[str] = None
    grade: Optional[str] = None
    group: Optional[str] = None
    student_id: Optional[str] = Field(None, pattern=r"^[0-9]{4}$")
    avatar_url: Optional[str] = None


class ProfileUpdate(ProfileBase):
    pass


class ProfileRead(ProfileBase):
    model_config = ConfigDict(from_attributes=True)
    id: uuid.UUID
    email: EmailStr
    role: UserRole
    status: UserStatus
    created_at: datetime


# --- Book resources and copies ---
class ResourceRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: uuid.UUID
    title: str
    authors: List[str]
    isbn: Optional[str]
    cover_url: Optional[str]


class BookCopyRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: uuid.UUID
    resource_id: uuid.UUID
    internal_code: str
    is_maintenance: bool
    resource: Optional[ResourceRead] = None


class LoanCreate(BaseModel):
    copy_id: uuid.UUID
    user_id: uuid.UUID
    due_date: datetime
    notes: Optional[str] = None


class LoanRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: uuid.UUID
    copy_id: uuid.UUID
    user_id: uuid.UUID
    registered_by: uuid.UUID
    loan_date: datetime
    due_date: datetime
    return_date: Optional[datetime]
    status: LoanStatus
    notes: Optional[str]
    copy: Optional[BookCopyRead] = None


# --- Cubicles ---
class CubicleRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: uuid.UUID
    code: str
    name: Optional[str]
    capacity: int
    is_maintenance: bool


class CubicleReservationCreate(BaseModel):
    cubicle_id: uuid.UUID
    user_id: uuid.UUID


class CubicleReservationRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: uuid.UUID
    cubicle_id: uuid.UUID
    user_id: uuid.UUID
    registered_by: uuid.UUID
    start_time: datetime
    end_time: Optional[datetime]
    status: CubicleReservationStatus


# --- Computers ---
class ComputerRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: uuid.UUID
    code: str
    name: Optional[str]
    is_maintenance: bool


class ComputerLoanCreate(BaseModel):
    computer_id: uuid.UUID
    user_id: uuid.UUID


class ComputerLoanRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: uuid.UUID
    computer_id: uuid.UUID
    user_id: uuid.UUID
    registered_by: uuid.UUID
    start_time: datetime
    end_time: Optional[datetime]
    status: ComputerLoanStatus


# --- Events and Visitors ---
class EventRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: uuid.UUID
    name: str
    description: Optional[str]
    start_time: datetime
    end_time: Optional[datetime]


class VisitorCreate(BaseModel):
    event_id: Optional[uuid.UUID] = None
    full_name: str
    email: Optional[EmailStr] = None
    institution: Optional[str] = None


class VisitorRead(VisitorCreate):
    model_config = ConfigDict(from_attributes=True)
    id: uuid.UUID
    check_in: datetime
    check_out: Optional[datetime]
    registered_by: uuid.UUID


# --- Dashboard & Reports ---
class DashboardMetricsRead(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    cubiclesOccupied: int
    cubiclesTotal: int
    activeLoans: int
    usersToday: int
    occupancyRate: float
    generatedAt: datetime


class ReportFilters(BaseModel):
    fromDate: Optional[datetime] = Field(None, alias="from")
    toDate: Optional[datetime] = Field(None, alias="to")
    type: str = "all"


class ReportSummary(BaseModel):
    access: int
    loans: int
    cubicles: int


class ReportItem(BaseModel):
    type: str
    id: uuid.UUID
    title: str
    description: Optional[str] = None
    status: Optional[str] = None
    date: datetime
    payload: Optional[dict[str, Any]] = None


class ReportRead(BaseModel):
    filters: ReportFilters
    generatedAt: datetime
    summary: ReportSummary
    items: List[ReportItem]

