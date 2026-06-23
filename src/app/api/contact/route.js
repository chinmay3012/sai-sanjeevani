import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    // Simple validation
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Please provide name, phone number, and your message.' },
        { status: 400 }
      );
    }

    const newMessage = db.addMessage({
      name,
      phone,
      email: email || '',
      message
    });

    return NextResponse.json(
      { message: 'Inquiry submitted successfully!', data: newMessage },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { error: 'An internal error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
