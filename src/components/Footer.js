import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="logo-link" style={{ marginBottom: '16px', color: 'var(--text-light)' }}>
              <div className="logo-icon" style={{ backgroundColor: 'var(--bg-white)', color: 'var(--primary-color)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21C12 21 20 16 20 10C20 5 16 3 12 3C8 3 4 5 4 10C4 16 12 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="logo-text">
                <h2 style={{ color: 'var(--text-light)', fontSize: '1.4rem' }}>Sai Sanjeevani</h2>
                <p style={{ color: 'var(--accent-color)', fontSize: '0.7rem' }}>Hospital • Sitapur</p>
              </div>
            </div>
            <p>Compassionate care, 24/7 — close to home in Sitapur. Providing modern medical facilities and critical care to our community.</p>
            <div style={{ marginTop: '16px' }}>
              <span className="badge" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'var(--accent-color)', borderColor: 'rgba(229, 169, 59, 0.3)' }}>
                🟢 Ayushman Bharat PM-JAY Empaneled
              </span>
            </div>
          </div>

          {/* Column 2: Visit Us */}
          <div className="footer-col">
            <h4>Visit Us</h4>
            <div className="footer-contact-info" style={{ marginTop: '16px' }}>
              <div className="footer-contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <p>
                  Plot No. 2, Station Road,<br />
                  Near Bus Stop, Sitapur,<br />
                  Uttar Pradesh - 261001
                </p>
              </div>
              <div className="footer-contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <p>Open 24x7 - Emergency & OPD</p>
              </div>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-contact-info" style={{ marginTop: '16px' }}>
              <a href="tel:8528422644" className="footer-contact-item footer-link-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <p>8528422644</p>
              </a>
              <a href="tel:8429922744" className="footer-contact-item footer-link-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <p>8429922744</p>
              </a>
              <a href="mailto:care@saisanjeevani.in" className="footer-contact-item footer-link-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <p>care@saisanjeevani.in</p>
              </a>
            </div>
          </div>

          {/* Column 4: Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links" style={{ marginTop: '16px' }}>
              <li><Link href="/about" className="footer-link-item">About Us</Link></li>
              <li><Link href="/services" className="footer-link-item">Services</Link></li>
              <li><Link href="/doctors" className="footer-link-item">Our Doctors</Link></li>
              <li><Link href="/ayushman-bharat" className="footer-link-item">Ayushman Bharat</Link></li>
              <li><Link href="/book" className="footer-link-item">Book Appointment</Link></li>
              <li><Link href="/contact" className="footer-link-item">Contact</Link></li>
              <li><Link href="/admin" className="footer-link-item">Staff Login</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-bottom-text">© 2026 Sai Sanjeevani Hospital. All rights reserved.</p>
          <p className="footer-bottom-text">Built with care for the people of Sitapur.</p>
        </div>
      </div>
    </footer>
  );
}
