import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { db } from '@/lib/db';

async function checkAuth() {
  const cookieStore = await cookies();
  const session = cookieStore.get('admin_session');
  return session && session.value === 'authenticated_sanjeevani_token';
}

export async function GET() {
  try {
    const isAuthed = await checkAuth();
    if (!isAuthed) {
      return NextResponse.json({ error: 'Unauthorized access.' }, { status: 401 });
    }

    const appointments = db.getAppointments();
    const messages = db.getMessages();

    // Sort by createdAt descending
    appointments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    messages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return NextResponse.json({ appointments, messages });
  } catch (error) {
    console.error('Error fetching admin data:', error);
    return NextResponse.json({ error: 'Failed to retrieve admin data.' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const isAuthed = await checkAuth();
    if (!isAuthed) {
      return NextResponse.json({ error: 'Unauthorized access.' }, { status: 401 });
    }

    const body = await request.json();
    const { type, id, status } = body; // type is 'appointment' or 'message'

    if (!type || !id || !status) {
      return NextResponse.json({ error: 'Missing required parameters: type, id, status.' }, { status: 400 });
    }

    let updated = null;
    if (type === 'appointment') {
      updated = db.updateAppointmentStatus(id, status);
    } else if (type === 'message') {
      updated = db.updateMessageStatus(id, status);
    } else {
      return NextResponse.json({ error: 'Invalid type parameter. Must be "appointment" or "message".' }, { status: 400 });
    }

    if (!updated) {
      return NextResponse.json({ error: 'Item not found.' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Status updated successfully!', data: updated });
  } catch (error) {
    console.error('Error updating status:', error);
    return NextResponse.json({ error: 'Failed to update status.' }, { status: 500 });
  }
}
