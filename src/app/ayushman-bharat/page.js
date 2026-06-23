import Link from 'next/link';

export default function AyushmanBharat() {
  return (
    <div style={{ backgroundColor: 'var(--bg-cream)', minHeight: '80vh' }}>
      
      {/* 1. Header Banner (Dark Green) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-green)', color: 'var(--text-light)', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="badge" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'var(--accent-color)', borderColor: 'rgba(229, 169, 59, 0.3)' }}>
                PM-JAY EMPANELED HOSPITAL
              </span>
              <h1 style={{ color: 'var(--text-light)', fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', marginBottom: '24px', lineHeight: '1.15' }}>
                Ayushman Bharat at <span style={{ color: 'var(--accent-color)' }}>Sai Sanjeevani.</span>
              </h1>
              <p style={{ color: '#cbd5e1', fontSize: '1.15rem', lineHeight: '1.6', marginBottom: '36px', maxWidth: '560px' }}>
                Cashless, quality treatment up to ₹5 lakh per family per year for eligible beneficiaries — across our emergency, ICU, maternity and orthopedic services.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="tel:8528422644" className="btn btn-primary" style={{ backgroundColor: 'var(--bg-white)', color: 'var(--primary-color)' }}>
                  📞 Call Helpdesk: 8528422644
                </a>
                <Link href="/book" className="btn btn-outline-white">
                  Book Appointment <span className="btn-icon-right">→</span>
                </Link>
              </div>
            </div>
            
            {/* Stat Cards Grid */}
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div className="ayushman-four-grid" style={{ maxWidth: '440px' }}>
                <div className="ayushman-stat-card">
                  <h3>₹5L</h3>
                  <p>Cover per family / year</p>
                </div>
                <div className="ayushman-stat-card">
                  <h3>Cashless</h3>
                  <p>At Sai Sanjeevani</p>
                </div>
                <div className="ayushman-stat-card">
                  <h3>All</h3>
                  <p>Listed treatments</p>
                </div>
                <div className="ayushman-stat-card">
                  <h3>PMJAY</h3>
                  <p>Empaneled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. How It Works Timeline (3 Simple Steps) */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="badge">HOW IT WORKS</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', marginBottom: '16px', color: 'var(--primary-color)' }}>
              From card to cashless care in 3 simple steps.
            </h2>
            <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              Bring your Ayushman Bharat card (PM-JAY) and a valid ID. Our coordinator will guide your family through the entire approval.
            </p>
          </div>

          <div className="timeline-steps-grid">
            <div className="timeline-step-card">
              <div className="timeline-step-icon">💳</div>
              <h4>Step 1</h4>
              <h3>Verify eligibility</h3>
              <p>Our PM-JAY desk checks your Ayushman card status, validates identity using biometric scan or OTP, and matches your specific treatment package in the government gateway.</p>
            </div>
            
            <div className="timeline-step-card">
              <div className="timeline-step-icon">🏥</div>
              <h4>Step 2</h4>
              <h3>Admission & treatment</h3>
              <p>Get admitted and treated by our consultants and clinical specialists. Enjoy zero out-of-pocket costs on covered surgical and ward procedures.</p>
            </div>

            <div className="timeline-step-card">
              <div className="timeline-step-icon">🪙</div>
              <h4>Step 3</h4>
              <h3>Cashless settlement</h3>
              <p>Our billing office coordinates directly with the government scheme for payments. You depart focused entirely on recovery, not paperwork.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Documentation & Checklists */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-white)', borderTop: '1px solid rgba(13, 74, 59, 0.05)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '50px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Frequently Asked Questions (FAQ)</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li>
                  <h4 style={{ color: 'var(--primary-color)', fontSize: '1.05rem', marginBottom: '6px' }}>Q: Who is eligible for cashless treatment?</h4>
                  <p style={{ fontSize: '0.95rem', margin: 0 }}>A: Families possessing a valid Ayushman Bharat Golden Card (PM-JAY Card) or whose name is recorded in the SECC-2011 database registry are eligible.</p>
                </li>
                <li>
                  <h4 style={{ color: 'var(--primary-color)', fontSize: '1.05rem', marginBottom: '6px' }}>Q: Are medicines and diagnostics covered?</h4>
                  <p style={{ fontSize: '0.95rem', margin: 0 }}>A: Yes, the coverage is fully inclusive. All diagnostic checkups, medical procedures, surgeries, ICU charges, medicines, and consumables are cashless during the hospitalization period.</p>
                </li>
                <li>
                  <h4 style={{ color: 'var(--primary-color)', fontSize: '1.05rem', marginBottom: '6px' }}>Q: What happens if I do not have a Golden Card yet?</h4>
                  <p style={{ fontSize: '0.95rem', margin: 0 }}>A: Visit our in-hospital helpdesk with your Ration Card (Patrata Grihasti or Antyodaya) and Aadhaar Card. Our coordinator can verify eligibility in the system and assist with card generation.</p>
                </li>
              </ul>
            </div>

            <div style={{
              backgroundColor: 'var(--bg-cream)',
              padding: '40px',
              borderRadius: 'var(--border-radius-lg)',
              border: '1px solid rgba(13, 74, 59, 0.08)'
            }}>
              <h3 style={{ color: 'var(--primary-color)', fontSize: '1.4rem', marginBottom: '20px' }}>📋 Documents to Bring for Verification</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: '24px' }}>Please carry the following documents in original during arrival to facilitate instant pre-authorisation:</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ fontSize: '1.2rem' }}>🆔</span>
                  <div>
                    <strong style={{ fontSize: '0.95rem' }}>Aadhaar Card</strong>
                    <p style={{ fontSize: '0.85rem', margin: '2px 0 0 0', color: 'var(--text-muted)' }}>Required for patient biometric validation.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ fontSize: '1.2rem' }}>💳</span>
                  <div>
                    <strong style={{ fontSize: '0.95rem' }}>PM-JAY Golden Card</strong>
                    <p style={{ fontSize: '0.85rem', margin: '2px 0 0 0', color: 'var(--text-muted)' }}>Active card matching patient credentials.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ fontSize: '1.2rem' }}>📖</span>
                  <div>
                    <strong style={{ fontSize: '0.95rem' }}>Family Ration Card</strong>
                    <p style={{ fontSize: '0.85rem', margin: '2px 0 0 0', color: 'var(--text-muted)' }}>Required as verification of eligible family unit.</p>
                  </div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid rgba(13, 74, 59, 0.1)', marginTop: '24px', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Need help? Contact Aarogya Mitra: <strong>8429922744</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
