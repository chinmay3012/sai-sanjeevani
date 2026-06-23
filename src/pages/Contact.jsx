import { useState } from 'react';
import { db } from '@/lib/db';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    if (!formData.name || !formData.phone || !formData.message) {
      setStatus({ submitting: false, success: false, error: 'Please fill in name, phone number, and message.' });
      return;
    }

    try {
      db.addMessage(formData);
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (err) {
      console.error('Contact submit error:', err);
      setStatus({ submitting: false, success: false, error: 'Failed to submit message. Please try again.' });
    }
  };

  return (
    <div className="section-padding">
      <div className="container">
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="badge">Contact Us</span>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Reach Sai Sanjeevani Hospital</h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.2rem' }}>
            Get in touch with our helpdesk, locate us on the map, or send an online inquiry directly to our administrative team.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '50px' }}>
          {/* Left Column: Direct Info & Map */}
          <div>
            <div className="contact-info-card animate-on-scroll" style={{
              backgroundColor: 'var(--bg-white)',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid rgba(13, 74, 59, 0.05)',
              marginBottom: '32px'
            }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', color: 'var(--primary-color)' }}>Hospital Location Details</h2>
              
              <div className="footer-contact-info" style={{ gap: '20px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary-color)', flexShrink: 0, marginTop: '2px' }}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <p style={{ color: 'var(--text-dark)', fontSize: '1rem', margin: 0 }}>
                    <strong>Plot No. 2, Station Road</strong><br />
                    Near Bus Stop, Sitapur, Uttar Pradesh - 261001
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary-color)', flexShrink: 0, marginTop: '2px' }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <p style={{ color: 'var(--text-dark)', fontSize: '1rem', margin: 0 }}>
                    <strong>Call Helpdesk:</strong><br />
                    <a href="tel:8528422644" style={{ color: 'var(--primary-color)', fontWeight: 700 }}>8528422644</a>,{' '}
                    <a href="tel:8429922744" style={{ color: 'var(--primary-color)', fontWeight: 700 }}>8429922744</a>
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary-color)', flexShrink: 0, marginTop: '2px' }}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <p style={{ color: 'var(--text-dark)', fontSize: '1rem', margin: 0 }}>
                    <strong>Administrative Support:</strong><br />
                    care@saisanjeevani.in
                  </p>
                </div>
              </div>

              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Landmark Guidelines:
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                  We are situated on Station Road, approximately 150 meters from the main Sitapur Bus Stand. Patient drop-off zones are available directly at our emergency gates.
                </p>
              </div>
            </div>

            {/* Map wrapper */}
            <div className="map-responsive">
              <iframe
                title="Google Maps Location for Sai Sanjeevani"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.279603099951!2d80.6756857!3d27.568425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ece9b4a45bc8b%3A0xe546b3f71c463a5f!2sStation%20Rd%2C%20Sitapur%2C%20Uttar%20Pradesh%20261001!5e0!3m2!1sen!2sin!4v1719163000000!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div>
            <div className="contact-form-card animate-on-scroll" style={{
              backgroundColor: 'var(--bg-white)',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid rgba(13, 74, 59, 0.05)'
            }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '16px', color: 'var(--primary-color)' }}>Send an Online Inquiry</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '28px' }}>
                Fill out the form below. Our Aarogya Mitra coordinator or desk staff will review your query and respond via call/email.
              </p>

              {status.success && (
                <div style={{
                  backgroundColor: '#d1fae5',
                  color: '#065f46',
                  padding: '16px 20px',
                  borderRadius: '30px',
                  marginBottom: '24px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Inquiry submitted successfully! We will get in touch with you shortly.
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
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                  {status.error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    placeholder="Enter 10-digit mobile number"
                    value={formData.phone}
                    onChange={handleChange}
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
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Your Inquiry / Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    rows="4"
                    placeholder="Describe your query (e.g. Ayushman Bharat eligibility, surgical consultations, package rates)"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '12px' }}
                  disabled={status.submitting}
                >
                  {status.submitting ? 'Submitting...' : 'Send Inquiry Message →'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
