export default function Home() {
  const specialties = [
    {
      title: '24x7 Emergency & Trauma',
      icon: '🚨',
      badgeBg: '#ef4444',
      imageBg: 'linear-gradient(135deg, #fee2e2 0%, #fca5a5 100%)',
      features: [
        'Rapid triage with on-call senior consultants',
        'Trauma stabilisation, IV resuscitation',
        'Equipped resuscitation bays & ambulance support'
      ],
      linkText: 'Book for 24x7',
      linkPath: '#book?doctor=Any%20Available%20Specialist'
    },
    {
      title: 'Intensive Care Unit (ICU)',
      icon: '🩺',
      badgeBg: '#0d4a3b',
      imageBg: 'linear-gradient(135deg, #dbeae5 0%, #99f6e4 100%)',
      features: [
        'Ventilators & multi-para monitoring',
        'Intensivist-led 24x7 care',
        'Dedicated isolation beds'
      ],
      linkText: 'Book for intensive',
      linkPath: '#book?doctor=Dr.%20Rakesh%20Singh'
    },
    {
      title: 'Maternity & High-Risk Pregnancy',
      icon: '👶',
      badgeBg: '#e5a93b',
      imageBg: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)',
      features: [
        'Painless deliveries & NICU linkage',
        'Fetal monitoring & incubator beds',
        'Gestational care & high-risk support'
      ],
      linkText: 'Book for maternity',
      linkPath: '#book?doctor=Dr.%20Priya%20Sharma'
    },
    {
      title: 'Orthopedic Surgery',
      icon: '🦴',
      badgeBg: '#7e22ce',
      imageBg: 'linear-gradient(135deg, #faf5ff 0%, #e9d5ff 100%)',
      features: [
        'Total knee & hip joint replacement',
        'Complex fracture & trauma restoration',
        'Post-operative physical rehab'
      ],
      linkText: 'Book for orthopedic',
      linkPath: '#book?doctor=Dr.%20Anil%20Verma'
    },
    {
      title: 'High-Dependency Unit (HDU)',
      icon: '💖',
      badgeBg: '#15803d',
      imageBg: 'linear-gradient(135deg, #f0fdf4 0%, #bbf7d0 100%)',
      features: [
        'Telemetry cardiac monitoring',
        'Specialized post-surgical recovery care',
        'Critical care nursing ratios'
      ],
      linkText: 'Book for HDU',
      linkPath: '#book?doctor=Any%20Available%20Specialist'
    },
    {
      title: 'General Medicine',
      icon: '🏥',
      badgeBg: '#0284c7',
      imageBg: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
      features: [
        'Weekly OPD consultations',
        'Chronic disease screening',
        'Inpatient infection care'
      ],
      linkText: 'Book for OPD',
      linkPath: '#book?doctor=Dr.%20Rakesh%20Singh'
    }
  ];

  const doctorsList = [
    {
      name: 'Dr. Anil Verma',
      specialty: 'Orthopedic Surgeon',
      degree: 'MBBS, MS (Ortho)',
      description: 'Specializes in joint replacement and trauma surgery, bringing extensive operative experience to bone reconstructions.',
      experience: '15+ years of experience',
      linkPath: '#book?doctor=Dr.%20Anil%20Verma',
      svgAvatar: (
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#e0e7ff"/>
          <circle cx="50" cy="38" r="16" fill="#fcd34d"/>
          <path d="M34 38C34 22 66 22 66 38Z" fill="#475569"/>
          <rect x="42" y="34" width="6" height="4" rx="1" stroke="#1e293b" strokeWidth="1.5"/>
          <rect x="52" y="34" width="6" height="4" rx="1" stroke="#1e293b" strokeWidth="1.5"/>
          <line x1="48" y1="36" x2="52" y2="36" stroke="#1e293b" strokeWidth="1.5"/>
          <path d="M25 90C25 72 35 68 44 68H56C65 68 75 72 75 90H25Z" fill="#ffffff"/>
          <path d="M44 68L50 82L56 68H44Z" fill="#cbd5e1"/>
          <path d="M48 68H52L51 75L49 75L48 68Z" fill="var(--secondary-color)"/>
          <path d="M38 68C38 76 62 76 62 68" stroke="#475569" strokeWidth="2" fill="none"/>
        </svg>
      )
    },
    {
      name: 'Dr. Priya Sharma',
      specialty: 'Obstetrics & Gynecology',
      degree: 'MBBS, MD (OBG)',
      description: 'High-risk pregnancy and maternity specialist. Dedicated to safe maternal deliveries and diagnostic health diagnostics.',
      experience: '14+ years of experience',
      linkPath: '#book?doctor=Dr.%20Priya%20Sharma',
      svgAvatar: (
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="var(--primary-light)"/>
          <circle cx="50" cy="38" r="16" fill="#fed7aa"/>
          <path d="M32 38C32 20 68 20 68 38C68 25 32 25 32 38Z" fill="#1e293b"/>
          <path d="M33 33C33 33 42 27 50 29C58 27 67 33 67 33" fill="none" stroke="#1e293b" strokeWidth="2"/>
          <path d="M25 90C25 74 35 68 44 68H56C65 68 75 74 75 90H25Z" fill="var(--primary-color)"/>
          <path d="M25 90C25 78 28 74 35 74V90H25Z" fill="#ffffff" fillOpacity="0.85"/>
          <path d="M75 90C75 78 72 74 65 74V90H75Z" fill="#ffffff" fillOpacity="0.85"/>
          <path d="M44 68L50 78L56 68H44Z" fill="#115e59"/>
        </svg>
      )
    },
    {
      name: 'Dr. Rakesh Singh',
      specialty: 'Critical Care & Intensivist',
      degree: 'MBBS, MD (Medicine), IDCCM',
      description: 'Leads the ICU & HDU teams round the clock. Expert in cardiovascular stabilization and acute respiratory diagnostics.',
      experience: '12+ years of experience',
      linkPath: '#book?doctor=Dr.%20Rakesh%20Singh',
      svgAvatar: (
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#e0f2fe"/>
          <circle cx="50" cy="38" r="16" fill="#ffedd5"/>
          <path d="M34 38C34 22 66 22 66 38Z" fill="#1e293b"/>
          <path d="M25 90C25 70 35 68 44 68H56C65 68 75 70 75 90H25Z" fill="#ffffff"/>
          <path d="M44 68L50 80L56 68H44Z" fill="#cbd5e1"/>
          <path d="M44 68H56L50 78L44 68Z" fill="#bae6fd"/>
          <path d="M38 68C38 76 62 76 62 68" stroke="#475569" strokeWidth="2" fill="none"/>
        </svg>
      )
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-cream)' }}>
      {/* 1. Hero Section */}
      <section className="section-padding" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '100px' }}>
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(13, 74, 59, 0.05) 0%, transparent 70%)',
          zIndex: 1
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-wrapper">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div className="badge">
                <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary-color)' }}></span>
                Ayushman Bharat PM-JAY Empaneled
              </div>
              
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', lineHeight: '1.15', marginBottom: '24px', letterSpacing: '-0.02em' }}>
                Healing hands. <br />
                <span style={{ color: 'var(--primary-color)' }}>Trusted care.</span> <br />
                Right here in <span style={{ color: 'var(--secondary-color)' }}>Sitapur.</span>
              </h1>
              
              <p style={{ fontSize: '1.1rem', marginBottom: '36px', maxWidth: '520px', lineHeight: '1.6' }}>
                Sai Sanjeevani Hospital is a multispecialty centre on Station Road, offering 24x7 emergency, critical care, maternity, and orthopedic services — proudly empaneled under Ayushman Bharat PM-JAY.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px', width: '100%' }}>
                <a href="#book" className="btn btn-primary">
                  Book Appointment <span className="btn-icon-right">→</span>
                </a>
                <a href="tel:8528422644" className="btn btn-secondary" style={{ backgroundColor: 'var(--secondary-color)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '4px' }}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Emergency: 8528422644
                </a>
              </div>
              
              <div className="hero-stats">
                <div className="hero-stat-item">
                  <h3>24/7</h3>
                  <p>Emergency</p>
                </div>
                <div style={{ width: '1px', backgroundColor: 'rgba(13, 74, 59, 0.15)', height: '45px' }}></div>
                <div className="hero-stat-item">
                  <h3>6+</h3>
                  <p>Specialties</p>
                </div>
                <div style={{ width: '1px', backgroundColor: 'rgba(13, 74, 59, 0.15)', height: '45px' }}></div>
                <div className="hero-stat-item">
                  <h3>1000s</h3>
                  <p>Lives Touched</p>
                </div>
              </div>
            </div>

            <div className="illustration-container">
              <div className="floating-badge floating-badge-orange" style={{ top: '10px', right: '-10px' }}>
                <span style={{ fontSize: '1.5rem' }}>⏰</span>
                <div>
                  <h4 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', margin: 0 }}>Always</h4>
                  <p style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--secondary-color)', margin: 0 }}>Open 24x7</p>
                </div>
              </div>

              <div className="floating-badge" style={{ bottom: '20px', left: '-20px', borderLeft: '4px solid var(--primary-color)' }}>
                <span style={{ fontSize: '1.5rem' }}>🛡️</span>
                <div>
                  <h4 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', margin: 0 }}>Approved</h4>
                  <p style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary-color)', margin: 0 }}>PM-JAY Empaneled</p>
                </div>
              </div>

              <div className="illustration-box" style={{ overflow: 'hidden', padding: 0, borderRadius: 'var(--border-radius-lg)', background: 'linear-gradient(135deg, #eef6f3 0%, #dbeae5 100%)', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '440px' }}>
                <svg width="400" height="420" viewBox="0 0 400 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="200" cy="220" r="140" fill="#ffffff" fillOpacity="0.5"/>
                  <circle cx="200" cy="220" r="100" fill="#ffffff" fillOpacity="0.7"/>

                  <g id="doctor-male">
                    <path d="M230 420C230 350 250 320 290 320H350C390 320 410 350 410 420H230Z" fill="#ffffff"/>
                    <path d="M290 320L310 360L330 320H290Z" fill="#e2e8f0"/>
                    <path d="M310 360V420" stroke="#cbd5e1" strokeWidth="2"/>
                    <path d="M305 320H315L312 340L308 340L305 320Z" fill="var(--secondary-color)"/>
                    <path d="M290 320L305 335" stroke="var(--primary-color)" strokeWidth="2"/>
                    <path d="M330 320L315 335" stroke="var(--primary-color)" strokeWidth="2"/>
                    <circle cx="310" cy="255" r="40" fill="#fcd34d" fillOpacity="0.8"/>
                    <path d="M270 255C270 215 350 215 350 255C350 220 270 220 270 255Z" fill="#475569"/>
                    <rect x="290" y="248" width="16" height="10" rx="2" stroke="#1e293b" strokeWidth="2"/>
                    <rect x="314" y="248" width="16" height="10" rx="2" stroke="#1e293b" strokeWidth="2"/>
                    <line x1="306" y1="253" x2="314" y2="253" stroke="#1e293b" strokeWidth="2"/>
                    <path d="M280 320C280 340 340 340 340 320" stroke="#475569" strokeWidth="3" fill="none"/>
                    <circle cx="310" cy="342" r="8" fill="#94a3b8"/>
                  </g>

                  <g id="doctor-female">
                    <path d="M70 420C70 345 95 310 145 310H195C245 310 270 345 270 420H70Z" fill="var(--primary-color)"/>
                    <path d="M145 310L170 350L195 310H145Z" fill="#115e59"/>
                    <path d="M165 350V420" stroke="#115e59" strokeWidth="2"/>
                    <path d="M70 420C70 355 90 330 115 330V420H70Z" fill="#ffffff" fillOpacity="0.9"/>
                    <path d="M270 420C270 355 250 330 225 330V420H270Z" fill="#ffffff" fillOpacity="0.9"/>
                    <circle cx="170" cy="240" r="42" fill="#fed7aa"/>
                    <path d="M125 240C125 180 215 180 215 240C215 200 125 200 125 240Z" fill="#1e293b"/>
                    <path d="M128 230C128 230 150 210 170 215C190 210 212 230 212 230" fill="none" stroke="#1e293b" strokeWidth="4"/>
                    <path d="M162 260C162 260 166 265 170 265C174 265 178 260 178 260" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  </g>
                  
                  <path d="M10 390H110L120 370L130 405L140 360L150 395L160 390H390" stroke="var(--accent-color)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.4"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Departments Section */}
      <section id="services" className="section-padding" style={{ backgroundColor: 'var(--bg-white)', borderTop: '1px solid rgba(13, 74, 59, 0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'left', marginBottom: '56px' }}>
            <span className="badge">DEPARTMENTS & SPECIALTIES</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '16px', maxWidth: '600px' }}>
              Comprehensive care, <span style={{ color: 'var(--primary-color)' }}>one address.</span>
            </h2>
            <p style={{ maxWidth: '600px', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              Every service at Sai Sanjeevani is built around timely access, skilled doctors and patient-friendly pricing.
            </p>
          </div>

          <div className="services-grid">
            {specialties.map((dept, index) => (
              <div key={index} className="dept-card">
                <div className="dept-image-wrap" style={{ background: dept.imageBg }}>
                  <div className="dept-badge-circle" style={{ backgroundColor: dept.badgeBg }}>
                    {dept.icon}
                  </div>
                  <svg width="100%" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.15 }}>
                    <path d="M0 100H100L110 80L120 120L130 60L140 140L150 100H300" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <div className="dept-card-content">
                  <h3>{dept.title}</h3>
                  <ul className="dept-features-list">
                    {dept.features.map((feat, idx) => (
                      <li key={idx} className="dept-feature-item">
                        {feat}
                      </li>
                    ))}
                  </ul>
                  
                  <a href={dept.linkPath} className="dept-action-link">
                    {dept.linkText} <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Meet The Team Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'left', marginBottom: '56px' }}>
            <span className="badge">MEET THE TEAM</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '16px', maxWidth: '600px' }}>
              Experienced doctors. <br /><span style={{ color: 'var(--primary-color)' }}>Familiar faces.</span>
            </h2>
            <p style={{ maxWidth: '600px', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              Our consultants and surgeons bring decades of combined experience across critical specialties — and they live and work right here in Sitapur.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '24px' }}>
            {doctorsList.map((doc, idx) => (
              <div key={idx} className="doctor-profile-card">
                <div className="doctor-photo-wrap">
                  {doc.svgAvatar}
                </div>

                <div className="doctor-card-body">
                  <div className="doctor-badge-tag">
                    🧬 {doc.specialty}
                  </div>
                  
                  <h3>{doc.name}</h3>
                  <div className="doctor-card-qualifications">
                    {doc.degree}
                  </div>

                  <p className="doctor-card-description">
                    {doc.description}
                  </p>

                  <div className="doctor-experience-tag">
                    👨‍⚕️ {doc.experience}
                  </div>

                  <a href={doc.linkPath} className="doctor-card-link">
                    Book consultation <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Ayushman Bharat Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-dark-green)', color: 'var(--text-light)', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="badge" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'var(--accent-color)', borderColor: 'rgba(229, 169, 59, 0.3)' }}>
                PM-JAY EMPANELED HOSPITAL
              </span>
              <h2 style={{ color: 'var(--text-light)', fontSize: 'clamp(2rem, 4vw, 2.6rem)', marginBottom: '20px', lineHeight: '1.2' }}>
                Ayushman Bharat at <span style={{ color: 'var(--accent-color)' }}>Sai Sanjeevani.</span>
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '1.1rem', marginBottom: '32px', maxWidth: '560px' }}>
                Cashless, quality treatment up to ₹5 lakh per family per year for eligible beneficiaries — across our emergency, ICU, maternity and orthopedic services.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="tel:8528422644" className="btn btn-primary" style={{ backgroundColor: 'var(--bg-white)', color: 'var(--primary-color)' }}>
                  📞 Call 8528422644
                </a>
                <a href="#book" className="btn btn-outline-white">
                  Book Appointment <span className="btn-icon-right">→</span>
                </a>
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div className="ayushman-four-grid">
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

      {/* 5. How It Works Timeline */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge">HOW IT WORKS</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', marginBottom: '16px' }}>From card to cashless care in 3 simple steps.</h2>
            <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              Bring your Ayushman Bharat card (PM-JAY) and a valid ID. Our coordinator will guide your family through the entire approval.
            </p>
          </div>

          <div className="timeline-steps-grid">
            <div className="timeline-step-card">
              <div className="timeline-step-icon">💳</div>
              <h4>Step 1</h4>
              <h3>Verify eligibility</h3>
              <p>Our PM-JAY desk checks your Ayushman card status, validates identity, and matches your specific treatment package in the government gateway.</p>
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

      {/* 6. Location Map & Contacts */}
      <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--bg-white)', borderTop: '1px solid rgba(13, 74, 59, 0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="badge">Where We Are</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>On Station Road, near the bus stand</h2>
            <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.1rem' }}>
              We are centrally located in Sitapur for quick accessibility during emergencies. Find directions or write to us directly.
            </p>
          </div>

          <div className="grid-2">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="card" style={{ padding: '40px', border: '1px solid rgba(13, 74, 59, 0.08)', backgroundColor: 'var(--bg-cream)' }}>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '20px' }}>Sai Sanjeevani Hospital</h3>
                
                <div className="footer-contact-info" style={{ gap: '20px', marginBottom: '32px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.4rem' }}>📍</span>
                    <p style={{ color: 'var(--text-dark)', fontSize: '1.05rem', margin: 0 }}>
                      <strong>Address:</strong><br />
                      Plot No. 2, Station Road,<br />
                      Near Bus Stop, Sitapur, Uttar Pradesh (261001)
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.4rem' }}>📞</span>
                    <p style={{ color: 'var(--text-dark)', fontSize: '1.05rem', margin: 0 }}>
                      <strong>Contact Numbers:</strong><br />
                      8528422644, 8429922744
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.4rem' }}>📧</span>
                    <p style={{ color: 'var(--text-dark)', fontSize: '1.05rem', margin: 0 }}>
                      <strong>Inquiries Email:</strong><br />
                      care@saisanjeevani.in
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <a href="#book" className="btn btn-primary">
                    Book Appointment <span className="btn-icon-right">→</span>
                  </a>
                  <a href="#contact" className="btn btn-outline-primary">
                    Visit / Send Message
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="map-responsive">
                <iframe
                  title="Sai Sanjeevani Hospital Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.279603099951!2d80.6756857!3d27.568425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ece9b4a45bc8b%3A0xe546b3f71c463a5f!2sStation%20Rd%2C%20Sitapur%2C%20Uttar%20Pradesh%20261001!5e0!3m2!1sen!2sin!4v1719163000000!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
