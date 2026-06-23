export default function Services() {
  const departments = [
    {
      title: '24x7 Emergency & Trauma Care',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
      ),
      bg: '#fee2e2',
      color: 'var(--secondary-color)',
      description: 'Fully prepared for critical emergencies. Our trauma unit is staffed 24 hours a day, 365 days a year by emergency physicians and trauma nurses.',
      features: [
        'Rapid assessment and triage protocols',
        'State-of-the-art emergency resuscitation bays',
        '24/7 access to urgent pathology lab and X-ray diagnostics',
        'Dedicated trauma surgeons and anesthesiologists on-call',
        'Cardiac monitoring and immediate stabilization for heart attacks/strokes'
      ]
    },
    {
      title: 'Intensive Care Unit (ICU)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      bg: 'var(--primary-light)',
      color: 'var(--primary-color)',
      description: 'Our intensive care unit provides continuous, specialized management for critically ill patients under the supervision of qualified intensivists.',
      features: [
        'Advanced invasive and non-invasive ventilators',
        'Continuous multi-parameter cardiac and vital monitoring',
        'Arterial blood gas (ABG) analysis equipment in-unit',
        'Strict infection control policies and isolated beds',
        '1:1 or 1:2 patient-to-nurse ratio for optimal attention'
      ]
    },
    {
      title: 'High-Dependency Unit (HDU)',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
      bg: '#f0fdf4',
      color: '#15803d',
      description: 'Step-down level of care bridging ICU and general wards, suited for patients requiring close monitoring but not requiring mechanical organ support.',
      features: [
        'Continuous telemetry monitoring of heart rate and oxygenation',
        'Expert post-operative monitoring for major surgical procedures',
        'Immediate availability of emergency equipment and medication',
        'Regular consultant rounds and dedicated nurse supervisors'
      ]
    },
    {
      title: 'Maternity & High-Risk Pregnancy Care',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M12 8v8"/>
          <path d="M8 12h8"/>
        </svg>
      ),
      bg: '#fff7ed',
      color: 'var(--accent-color)',
      description: 'Compassionate, safe birthing services led by experienced obstetricians, specializing in normal, instrumental, and emergency Caesarean deliveries.',
      features: [
        'Painless labor delivery options available',
        'Continuous electronic fetal heart rate monitoring',
        'Management of gestational diabetes, pre-eclampsia, and twins',
        'In-house Pediatrician & Neonatologist for immediate baby care',
        'Well-equipped nursery and neonatal isolation facility'
      ]
    },
    {
      title: 'Orthopedic Surgery & Joint Replacements',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="3"/>
          <path d="M6.5 12h11"/>
          <path d="M12 8v11"/>
          <path d="M9 22h6"/>
        </svg>
      ),
      bg: '#faf5ff',
      color: '#7e22ce',
      description: 'Surgical and non-surgical solutions for bone, muscle, and joint conditions, specializing in complex trauma restoration and joint replacements.',
      features: [
        'Total Knee Replacement (TKR) and Total Hip Replacement (THR)',
        'Complex fracture repair, non-union, and mal-union corrections',
        'Keyhole surgery (Arthroscopy) for knee and shoulder injuries',
        'Geriatric fracture management (e.g., hip fractures in elderly)',
        'Post-operative rehabilitation and active physiotherapy clinic'
      ]
    },
    {
      title: 'General Medicine & OPD',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="12" y1="8" x2="12" y2="16"/>
          <line x1="8" y1="12" x2="16" y2="12"/>
        </svg>
      ),
      bg: '#e0f2fe',
      color: '#0369a1',
      description: 'Comprehensive outpatient and inpatient management for broad-spectrum conditions, seasonal fevers, and lifestyle disorders.',
      features: [
        'OPD consultations for diabetes, hypertension, and asthma',
        'Treatment for dengue, malaria, typhoid, and infectious diseases',
        'Preventive family health packages and screening packages',
        'Geriatric care and management of age-related complications',
        'Vaccination clinics and health awareness counseling'
      ]
    }
  ];

  const opdSchedules = [
    { name: 'Orthopedic & Joint Surgery Clinic', doctor: 'Dr. Anil Verma', location: 'New OPD Building, Ground Floor (D Block)', phone: '8528422644 (Ext 102)', hours: '10:00 AM - 04:00 PM', link: '#book?doctor=Dr.%20Anil%20Verma' },
    { name: 'Gynecology & Antenatal Suite', doctor: 'Dr. Priya Sharma', location: 'New OPD Building, 1st Floor (C Block)', phone: '8528422644 (Ext 105)', hours: '11:00 AM - 05:00 PM', link: '#book?doctor=Dr.%20Priya%20Sharma' },
    { name: 'General Medicine & Diabetes Clinic', doctor: 'Dr. Rakesh Singh', location: 'New OPD Building, 2nd Floor (B Block)', phone: '8528422644 (Ext 101)', hours: '09:00 AM - 02:00 PM', link: '#book?doctor=Dr.%20Rakesh%20Singh' },
    { name: 'Anesthesiology & Pain Management', doctor: 'On-Call Anesthetist', location: 'Main OT Complex, D Block Ground Floor', phone: '8528422644 (Ext 109)', hours: 'Available 24x7', link: '#book?doctor=Any%20Available%20Specialist' },
    { name: 'Pediatrics & Immunization clinic', doctor: 'Visiting Consultant', location: 'Maternal Wing, 1st Floor (A Block)', phone: '8429922744 (Ext 202)', hours: '04:00 PM - 06:00 PM', link: '#book?doctor=Any%20Available%20Specialist' },
    { name: 'Physiotherapy & Rehabilitation', doctor: 'Rehab Specialist', location: 'OPD Extension Wing, Ground Floor', phone: '8429922744 (Ext 208)', hours: '09:00 AM - 05:00 PM', link: '#book?doctor=Any%20Available%20Specialist' }
  ];

  return (
    <div className="section-padding">
      <div className="container">
        {/* Title Block */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="badge">Our Specialties</span>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Multispecialty Healthcare Services</h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.2rem' }}>
            Sai Sanjeevani Hospital provides professional clinical care with modern technology and empathy under one roof in Sitapur.
          </p>
        </div>

        {/* Detailed Service Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginBottom: '80px' }}>
          {departments.map((dept, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className="service-detail-card animate-on-scroll"
                style={{
                  flexDirection: isEven ? 'row' : 'row-reverse',
                }}
              >
                {/* Left Side: Detail */}
                <div style={{ flex: '1 1 450px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                    <div style={{
                      backgroundColor: dept.bg,
                      color: dept.color,
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.8rem',
                    }}>
                      {dept.icon}
                    </div>
                    <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)' }}>{dept.title}</h2>
                  </div>

                  <p style={{ fontSize: '1.1rem', marginBottom: '24px', lineHeight: '1.6' }}>{dept.description}</p>
                  
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <a href="#book" className="btn btn-primary">
                      Book Department Appointment
                    </a>
                  </div>
                </div>

                {/* Right Side: Procedures list */}
                <div className="procedure-list-card animate-on-scroll" style={{ flex: '1 1 400px' }}>
                  <h4 style={{ color: 'var(--primary-color)', fontSize: '1.1rem', marginBottom: '16px', borderBottom: '1px solid rgba(13, 74, 59, 0.1)', paddingBottom: '10px' }}>
                    Key Operations & Treatments:
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {dept.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <span style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>•</span>
                        <span style={{ fontSize: '0.95rem', color: 'var(--text-dark)' }}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* OPD CLINIC AND SCHEDULE LISTING */}
        <div style={{ borderTop: '2px dashed rgba(13, 74, 59, 0.15)', paddingTop: '60px' }}>
          <div style={{ textAlign: 'left', marginBottom: '32px' }}>
            <span className="badge">CLINICAL SESSIONS</span>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '12px' }}>OPD Clinic Location & Schedule Directory</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', margin: 0 }}>
              The hospital operates on an integrated appointment booking layout. Refer to the directory details below to schedule your consultations.
            </p>
          </div>

          <div className="opd-table-wrapper">
            <table className="opd-table">
              <thead>
                <tr>
                  <th>Clinic / OPD Name</th>
                  <th>Consulting Specialist</th>
                  <th>Physical Wing Location</th>
                  <th>Clinical Hours</th>
                  <th>Direct Ext</th>
                  <th style={{ textAlign: 'center' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {opdSchedules.map((schedule, idx) => (
                  <tr key={idx}>
                    <td>
                      <strong style={{ color: 'var(--primary-color)' }}>{schedule.name}</strong>
                    </td>
                    <td>
                      <strong>{schedule.doctor}</strong>
                    </td>
                    <td style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary-color)' }}>
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                        </svg>
                        {schedule.location}
                      </span>
                    </td>
                    <td style={{ fontWeight: 600, fontSize: '0.9rem' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary-color)' }}>
                          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                        </svg>
                        {schedule.hours}
                      </span>
                    </td>
                    <td style={{ fontSize: '0.85rem', fontFamily: 'monospace' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary-color)' }}>
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        {schedule.phone}
                      </span>
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      <a href={schedule.link} className="opd-btn-book">
                        Book Slot <span>→</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{
            marginTop: '32px',
            backgroundColor: '#fee2e2',
            border: '1px solid rgba(239, 68, 68, 0.15)',
            padding: '24px',
            borderRadius: 'var(--border-radius-md)',
            color: '#991b1b',
            fontSize: '0.95rem'
          }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px', color: '#b91c1c' }}>
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <div>
                <strong>Intensive Care Notice:</strong> In the interest of emergency patient safety, critical admissions to the Intensive Care Unit (ICU) and High-Dependency Unit (HDU) are handled immediately. Please call the emergency helpline directly at <strong>8528422644</strong> for critical bed availability.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
