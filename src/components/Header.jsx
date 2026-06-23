import { useState } from 'react';

export default function Header({ currentHash }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '#' },
    { name: 'About', path: '#about' },
    { name: 'Services', path: '#services' },
    { name: 'Doctors', path: '#doctors' },
    { name: 'Ayushman Bharat', path: '#ayushman-bharat' },
    { name: 'Gallery', path: '#gallery' },
    { name: 'Contact', path: '#contact' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Emergency Banner */}
      <div className="top-emergency-banner">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#ff4d4d' }}>
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
            <span>24x7 Emergency & Trauma Care Available in Sitapur</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a href="tel:8528422644" style={{ fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              8528422644
            </a>
            <a href="tel:8429922744" style={{ fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              8429922744
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="container header-container">
          {/* Logo */}
          <a href="#" className="logo-link" onClick={closeMobileMenu}>
            <div className="logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21C12 21 20 16 20 10C20 5 16 3 12 3C8 3 4 5 4 10C4 16 12 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="logo-text">
              <h2>Sai Sanjeevani</h2>
              <p>Hospital • Sitapur</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav>
            <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
              {navItems.map((item) => {
                const isActive = currentHash === item.path;
                return (
                  <li key={item.name}>
                    <a
                      href={item.path}
                      className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
              {/* Mobile Booking Button */}
              {mobileMenuOpen && (
                <li style={{ marginTop: '24px', width: '100%' }}>
                  <a
                    href="#book"
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                    onClick={closeMobileMenu}
                  >
                    Book Appointment
                  </a>
                </li>
              )}
            </ul>
          </nav>

          {/* Header Action CTAs */}
          <div className="header-actions">
            <a href="tel:8528422644" className="phone-cta">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>8528422644</span>
            </a>
            <a href="#book" className="btn btn-primary">
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button className="mobile-nav-toggle" onClick={toggleMobileMenu} aria-label="Toggle navigation menu">
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>
      </header>
    </>
  );
}
