'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { db } from '@/lib/db';

const departments = [
  'General Medicine',
  'Orthopedics',
  'Maternity',
  'Intensive Care (ICU)',
  'High-Dependency Unit (HDU)',
  '24x7 Emergency & Trauma'
];

const doctors = [
  { name: 'Dr. Anil Verma', dept: 'Orthopedics' },
  { name: 'Dr. Priya Sharma', dept: 'Maternity' },
  { name: 'Dr. Rakesh Singh', dept: 'General Medicine' },
  { name: 'Any Available Specialist', dept: 'General Medicine' }
];

const timeSlots = [
  '09:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '12:00 PM - 01:00 PM',
  '02:00 PM - 03:00 PM',
  '03:00 PM - 04:00 PM',
  '04:00 PM - 05:00 PM'
];

function BookingForm() {
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: timeSlots[1], // 10:00 AM - 11:00 AM default
    department: departments[0],
    doctor: doctors[3].name // Any Available default
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
    bookedData: null
  });

  // Handle URL Query Params for Doctor Pre-selection
  useEffect(() => {
    const doctorParam = searchParams.get('doctor');
    if (doctorParam) {
      const matchDoc = doctors.find(doc => doc.name.toLowerCase() === doctorParam.toLowerCase());
      if (matchDoc) {
        setFormData(prev => ({
          ...prev,
          doctor: matchDoc.name,
          department: matchDoc.dept
        }));
      }
    }
  }, [searchParams]);

  // Adjust Doctor selection based on Department selection
  const handleDepartmentChange = (e) => {
    const dept = e.target.value;
    let doctor = 'Any Available Specialist';
    
    if (dept === 'Orthopedics') doctor = 'Dr. Anil Verma';
    else if (dept === 'Maternity') doctor = 'Dr. Priya Sharma';
    else if (dept === 'General Medicine') doctor = 'Dr. Rakesh Singh';
    
    setFormData(prev => ({
      ...prev,
      department: dept,
      doctor: doctor
    }));
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null, bookedData: null });

    if (!formData.patientName || !formData.phone || !formData.date || !formData.timeSlot) {
      setStatus({ submitting: false, success: false, error: 'Please fill in all mandatory fields.', bookedData: null });
      return;
    }

    try {
      const appointment = db.addAppointment(formData);
      setStatus({
        submitting: false,
        success: true,
        error: null,
        bookedData: appointment
      });
      // Clear form
      setFormData({
        patientName: '',
        phone: '',
        email: '',
        date: '',
        timeSlot: timeSlots[1],
        department: departments[0],
        doctor: doctors[3].name
      });
    } catch (err) {
      console.error('Booking submit error:', err);
      setStatus({ submitting: false, success: false, error: 'Failed to schedule appointment.', bookedData: null });
    }
  };

  // Get tomorrow's date format for minimum booking date
  const getMinDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1); // Only allow booking from tomorrow onwards
    return today.toISOString().split('T')[0];
  };

  return (
    <div className="container" style={{ maxWidth: '650px' }}>
      <div style={{
        backgroundColor: 'var(--bg-white)',
        padding: '40px',
        borderRadius: 'var(--border-radius-lg)',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid rgba(13, 74, 59, 0.05)',
        margin: '20px 0'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '12px', color: 'var(--primary-color)', textAlign: 'center' }}>
          Schedule a Consultation
        </h2>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '32px' }}>
          Complete the form below to lock in your visiting schedule. If you are an Ayushman Bharat beneficiary, please notify our coordinators at reception upon arrival.
        </p>

        {status.success && status.bookedData && (
          <div style={{
            backgroundColor: '#d1fae5',
            color: '#065f46',
            padding: '24px',
            borderRadius: 'var(--border-radius-md)',
            marginBottom: '32px',
            fontSize: '0.95rem',
            border: '1px solid #a7f3d0'
          }}>
            <h3 style={{ color: '#065f46', fontSize: '1.2rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>✓</span> Appointment Confirmed!
            </h3>
            <p style={{ marginBottom: '16px' }}>Your visit request has been successfully registered. Please note your booking summary:</p>
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.5)',
              padding: '16px',
              borderRadius: 'var(--border-radius-sm)',
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <div><strong>Booking ID:</strong> {status.bookedData.id.slice(0, 8).toUpperCase()}</div>
              <div><strong>Patient Name:</strong> {status.bookedData.patientName}</div>
              <div><strong>Department:</strong> {status.bookedData.department}</div>
              <div><strong>Consulting Doctor:</strong> {status.bookedData.doctor}</div>
              <div><strong>Schedule Date:</strong> {status.bookedData.date}</div>
              <div><strong>Time Slot:</strong> {status.bookedData.timeSlot}</div>
              <div><strong>Status:</strong> <span style={{ color: '#b45309', fontWeight: 'bold' }}>Pending Staff Review</span></div>
            </div>
            <p style={{ marginTop: '16px', fontSize: '0.85rem', color: '#047857', fontStyle: 'italic' }}>
              Please arrive 15 minutes before your time slot. Present the Booking ID at the registration counter.
            </p>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button onClick={() => setStatus({ submitting: false, success: false, error: null, bookedData: null })} className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
                Book Another Appointment
              </button>
            </div>
          </div>
        )}

        {status.error && (
          <div style={{
            backgroundColor: '#fee2e2',
            color: '#991b1b',
            padding: '16px 20px',
            borderRadius: '30px',
            marginBottom: '24px',
            fontSize: '0.95rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span>⚠️</span> {status.error}
          </div>
        )}

        {!status.success && (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="patientName" className="form-label">Patient Full Name *</label>
              <input
                type="text"
                id="patientName"
                name="patientName"
                className="form-input"
                placeholder="Enter patient's name"
                value={formData.patientName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="grid-2" style={{ gap: '16px', marginBottom: 0 }}>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Contact Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  placeholder="Enter 10-digit mobile"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address (Optional)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="grid-2" style={{ gap: '16px', marginBottom: 0 }}>
              <div className="form-group">
                <label htmlFor="department" className="form-label">Specialty / Department *</label>
                <select
                  id="department"
                  name="department"
                  className="form-select"
                  value={formData.department}
                  onChange={handleDepartmentChange}
                >
                  {departments.map((dept, idx) => (
                    <option key={idx} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="doctor" className="form-label">Consulting Doctor *</label>
                <select
                  id="doctor"
                  name="doctor"
                  className="form-select"
                  value={formData.doctor}
                  onChange={handleInputChange}
                >
                  {doctors
                    .filter(doc => formData.department === '24x7 Emergency & Trauma' || formData.department === 'Intensive Care (ICU)' || formData.department === 'High-Dependency Unit (HDU)' || doc.dept === formData.department || doc.name === 'Any Available Specialist')
                    .map((doc, idx) => (
                      <option key={idx} value={doc.name}>{doc.name}</option>
                    ))}
                </select>
              </div>
            </div>

            <div className="grid-2" style={{ gap: '16px', marginBottom: 0 }}>
              <div className="form-group">
                <label htmlFor="date" className="form-label">Preferred Date *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="form-input"
                  min={getMinDate()}
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="timeSlot" className="form-label">Preferred Time Slot *</label>
                <select
                  id="timeSlot"
                  name="timeSlot"
                  className="form-select"
                  value={formData.timeSlot}
                  onChange={handleInputChange}
                >
                  {timeSlots.map((slot, idx) => (
                    <option key={idx} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '20px', fontSize: '1.05rem' }}
              disabled={status.submitting}
            >
              {status.submitting ? 'Booking in Progress...' : 'Confirm Appointment Reservation'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function Book() {
  return (
    <div className="section-padding" style={{ backgroundColor: 'var(--bg-cream)', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Suspense fallback={
        <div className="container" style={{ textAlign: 'center', padding: '40px' }}>
          <h3 style={{ color: 'var(--primary-color)' }}>Loading Booking Engine...</h3>
          <p>Please wait while we initialize doctor schedules.</p>
        </div>
      }>
        <BookingForm />
      </Suspense>
    </div>
  );
}
