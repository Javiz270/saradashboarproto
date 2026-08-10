import uuid
from datetime import datetime
from typing import List, Optional

from sqlalchemy import CHAR, Boolean, DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.dialects.postgresql import ARRAY, UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql import func

from app.db import Base


class Profile(Base):
    __tablename__ = "profiles"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True)
    first_name: Mapped[Optional[str]] = mapped_column(String(100), nullable=True)
    last_name_paternal: Mapped[Optional[str]] = mapped_column(String(100), nullable=True)
    last_name_maternal: Mapped[Optional[str]] = mapped_column(String(100), nullable=True)
    career: Mapped[Optional[str]] = mapped_column(String(100), nullable=True)
    grade: Mapped[Optional[str]] = mapped_column(String(20), nullable=True)
    group: Mapped[Optional[str]] = mapped_column(String(20), nullable=True)
    student_id: Mapped[Optional[str]] = mapped_column(CHAR(4), nullable=True, index=True)
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True, nullable=False)
    avatar_url: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    role: Mapped[str] = mapped_column(String(20), default="student", nullable=False)
    status: Mapped[str] = mapped_column(String(20), default="active", nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)


class Resource(Base):
    __tablename__ = "resources"
    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    title: Mapped[str] = mapped_column(String(255), nullable=False)
    authors: Mapped[List[str]] = mapped_column(ARRAY(Text), default=list, nullable=False)
    isbn: Mapped[Optional[str]] = mapped_column(String(20), index=True, nullable=True)
    cover_url: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)
    
    copies: Mapped[List["BookCopy"]] = relationship("BookCopy", back_populates="resource", cascade="all, delete-orphan")


class BookCopy(Base):
    __tablename__ = "book_copies"
    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    resource_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("resources.id", ondelete="CASCADE"), nullable=False)
    internal_code: Mapped[str] = mapped_column(String(50), unique=True, index=True, nullable=False)
    is_maintenance: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)

    resource: Mapped["Resource"] = relationship("Resource", back_populates="copies")
    loans: Mapped[List["Loan"]] = relationship("Loan", back_populates="copy")


class Loan(Base):
    __tablename__ = "loans"
    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    copy_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("book_copies.id", ondelete="RESTRICT"), nullable=False)
    user_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("profiles.id", ondelete="RESTRICT"), nullable=False)
    registered_by: Mapped[uuid.UUID] = mapped_column(ForeignKey("profiles.id", ondelete="RESTRICT"), nullable=False)
    loan_date: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    due_date: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    return_date: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    status: Mapped[str] = mapped_column(String(20), default="active", nullable=False)
    notes: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False)

    copy: Mapped["BookCopy"] = relationship("BookCopy", back_populates="loans")
    user: Mapped["Profile"] = relationship("Profile", foreign_keys=[user_id])
    registrar: Mapped["Profile"] = relationship("Profile", foreign_keys=[registered_by])


class Cubicle(Base):
    __tablename__ = "cubicles"
    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    code: Mapped[str] = mapped_column(String(32), unique=True, nullable=False)
    name: Mapped[Optional[str]] = mapped_column(String(160), nullable=True)
    capacity: Mapped[int] = mapped_column(Integer, default=1, nullable=False)
    is_maintenance: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    
    reservations: Mapped[List["CubicleReservation"]] = relationship("CubicleReservation", back_populates="cubicle")


class CubicleReservation(Base):
    __tablename__ = "cubicle_reservations"
    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    cubicle_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("cubicles.id", ondelete="RESTRICT"), nullable=False)
    user_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("profiles.id", ondelete="RESTRICT"), nullable=False)
    registered_by: Mapped[uuid.UUID] = mapped_column(ForeignKey("profiles.id", ondelete="RESTRICT"), nullable=False)
    start_time: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    end_time: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    status: Mapped[str] = mapped_column(String(20), default="active", nullable=False)

    cubicle: Mapped["Cubicle"] = relationship("Cubicle", back_populates="reservations")
    user: Mapped["Profile"] = relationship("Profile", foreign_keys=[user_id])
    registrar: Mapped["Profile"] = relationship("Profile", foreign_keys=[registered_by])


class Computer(Base):
    __tablename__ = "computers"
    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    code: Mapped[str] = mapped_column(String(32), unique=True, nullable=False)
    name: Mapped[Optional[str]] = mapped_column(String(160), nullable=True)
    is_maintenance: Mapped[bool] = mapped_column(Boolean, default=False, nullable=False)
    
    loans: Mapped[List["ComputerLoan"]] = relationship("ComputerLoan", back_populates="computer")


class ComputerLoan(Base):
    __tablename__ = "computer_loans"
    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    computer_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("computers.id", ondelete="RESTRICT"), nullable=False)
    user_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("profiles.id", ondelete="RESTRICT"), nullable=False)
    registered_by: Mapped[uuid.UUID] = mapped_column(ForeignKey("profiles.id", ondelete="RESTRICT"), nullable=False)
    start_time: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    end_time: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    status: Mapped[str] = mapped_column(String(20), default="active", nullable=False)

    computer: Mapped["Computer"] = relationship("Computer", back_populates="loans")
    user: Mapped["Profile"] = relationship("Profile", foreign_keys=[user_id])
    registrar: Mapped["Profile"] = relationship("Profile", foreign_keys=[registered_by])


class Event(Base):
    __tablename__ = "events"
    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    description: Mapped[Optional[str]] = mapped_column(Text, nullable=True)
    start_time: Mapped[datetime] = mapped_column(DateTime(timezone=True), nullable=False)
    end_time: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    
    visitors: Mapped[List["Visitor"]] = relationship("Visitor", back_populates="event")


class Visitor(Base):
    __tablename__ = "visitors"
    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    event_id: Mapped[Optional[uuid.UUID]] = mapped_column(ForeignKey("events.id", ondelete="SET NULL"), nullable=True)
    full_name: Mapped[str] = mapped_column(String(255), nullable=False)
    email: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    institution: Mapped[Optional[str]] = mapped_column(String(255), nullable=True)
    check_in: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    check_out: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    registered_by: Mapped[uuid.UUID] = mapped_column(ForeignKey("profiles.id", ondelete="RESTRICT"), nullable=False)

    event: Mapped["Event"] = relationship("Event", back_populates="visitors")
    registrar: Mapped["Profile"] = relationship("Profile")
