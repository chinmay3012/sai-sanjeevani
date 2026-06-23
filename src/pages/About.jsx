export default function About() {
  return (
    <div className="section-padding" style={{ minHeight: '80vh' }}>
      <div className="container">
        {/* Title Block */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="badge">About Us</span>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Compassionate care, modern medicine.</h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.2rem' }}>
            Serving the community of Sitapur with 24/7 multispecialty emergency, trauma, critical care, and advanced surgeries.
          </p>
        </div>

        {/* Story Block */}
        <div className="grid-2" style={{ alignItems: 'center', marginBottom: '80px' }}>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '24px' }}>Our History & Mission</h2>
            <p style={{ fontSize: '1.05rem', marginBottom: '20px', lineHeight: '1.7' }}>
              Sai Sanjeevani Hospital was established with the vision of bringing premium, affordable, and accessible healthcare to the doorstep of Sitapur. Located on Station Road near the main Bus Stand, we have grown into one of the region's most trusted medical landmarks.
            </p>
            <p style={{ fontSize: '1.05rem', marginBottom: '24px', lineHeight: '1.7' }}>
              Our mission is simple: <strong>To provide healing hands and trusted care with clinical excellence and absolute integrity.</strong> We believe that quality healthcare is a fundamental right, which is why we are officially empaneled under the Ayushman Bharat PM-JAY scheme to offer cashless hospitalisation for secondary and tertiary care.
            </p>
            <a href="#contact" className="btn btn-primary">
              Contact Our Helpdesk <span className="btn-icon-right">→</span>
            </a>
          </div>

          <div className="about-values-card animate-on-scroll" style={{ backgroundColor: 'var(--primary-light)', border: '1px solid rgba(13, 74, 59, 0.08)' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '24px', color: 'var(--primary-color)' }}>Our Core Values</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <li>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '6px', color: 'var(--primary-color)' }}>Compassion First</h4>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>Every patient is treated with respect, kindness, and deep empathy, ensuring they feel secure and cared for at every stage of their treatment.</p>
              </li>
              <li>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '6px', color: 'var(--primary-color)' }}>Clinical Excellence</h4>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>We employ experienced doctors, modern diagnostics, and advanced treatment methods to deliver top-tier clinical outcomes.</p>
              </li>
              <li>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '6px', color: 'var(--primary-color)' }}>Affordability & Transparency</h4>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>No hidden charges. We work diligently to provide premium care at sensible rates, with dedicated support for Ayushman Bharat cashless pathways.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Facilities Block */}
        <div style={{ borderTop: '1px solid rgba(13, 74, 59, 0.1)', paddingTop: '60px' }}>
          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '40px' }}>Hospital Facilities & Capacity</h2>
          <div className="grid-3" style={{ gap: '24px' }}>
            <div className="card about-capacity-card animate-on-scroll">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary-color)', marginBottom: '16px' }}><path d="M2 4v16"></path><path d="M2 11h18v4H2z"></path><path d="M11 4v7"></path><path d="M22 11v9"></path></svg>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Critical Care Unit</h3>
              <p style={{ fontSize: '0.95rem' }}>Equipped with advanced multi-channel monitors, central oxygen delivery, ventilators, and dedicated critical care nurses working in 8-hour shifts.</p>
            </div>
            
            <div className="card about-capacity-card animate-on-scroll">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary-color)', marginBottom: '16px' }}><path d="M9 12h.01"></path><path d="M15 12h.01"></path><path d="M10 16c.5.5 1.5.5 2 0"></path><path d="M19 6.37a8 8 0 1 0-14 0"></path><path d="M12 2v2"></path></svg>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Maternity & Labor Suites</h3>
              <p style={{ fontSize: '0.95rem' }}>Comprehensive birthing rooms with fetal monitors, specialized high-risk pregnancy beds, and direct linkage to our neonatal intensive care rooms.</p>
            </div>

            <div className="card about-capacity-card animate-on-scroll">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary-color)', marginBottom: '16px' }}><path d="M16.5 15.5a3 3 0 1 0-4-4L6 5.5a2.5 2.5 0 1 0-3.5 3.5L8.5 15a3 3 0 1 0 4 4l6.5-6.5a2.5 2.5 0 1 0 3.5-3.5L16.5 15.5Z"></path></svg>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Orthopedic OT</h3>
              <p style={{ fontSize: '0.95rem' }}>Ultra-clean laminar airflow operating theater designed specifically for joint replacement surgeries, bone trauma stabilization, and complex arthroplasties.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
