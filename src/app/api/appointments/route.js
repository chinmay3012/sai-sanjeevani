import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request) {
  try {
    const body = await request.json();
    const { patientName, phone, email, date, timeSlot, department, doctor } = body;

    // Simple validation
    if (!patientName || !phone || !date || !timeSlot || !department || !doctor) {
      return NextResponse.json(
        { error: 'Please provide all required fields (Name, Phone, Date, Time Slot, Department, Doctor).' },
        { status: 400 }
      );
    }

    const appointment = db.addAppointment({
      patientName,
      phone,
      email: email || '',
      date,
      timeSlot,
      department,
      doctor
    });

    return NextResponse.json(
      { message: 'Appointment booked successfully!', appointment },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error booking appointment:', error);
    return NextResponse.json(
      { error: 'An internal error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
