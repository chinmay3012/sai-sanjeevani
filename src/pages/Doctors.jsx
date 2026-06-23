export default function Doctors() {
  const doctorsList = [
    {
      name: 'Dr. Anil Verma',
      specialty: 'Orthopedic Surgeon',
      degree: 'MBBS, MS (Ortho), Fellowship in Joint Replacement',
      experience: '15+ years of experience',
      description: 'Senior joint replacement specialist with extensive experience in knee/hip arthroplasties, complex limb fractures, pediatric bone trauma care, and sports ligamental reconstruction.',
      schedule: 'Mon - Sat: 10:00 AM - 04:00 PM',
      color: '#4f46e5',
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
      degree: 'MBBS, MD (OBG), Certified IVF Consultant',
      experience: '14+ years of experience',
      description: 'Expertise in high-risk pregnancy diagnostics, painless labor management, laparoscopy surgeries, pre-pregnancy counseling, and comprehensive fetal monitoring solutions.',
      schedule: 'Mon - Sat: 11:00 AM - 05:00 PM',
      color: '#0d4a3b',
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
      degree: 'MBBS, MD (Medicine), IDCCM, Fellowship in Critical Care',
      experience: '12+ years of experience',
      description: 'Leads our multi-bed ICU/HDU critical care teams. Specializes in managing severe septic shock, acute respiratory distress syndrome, cardiac failures, and multi-organ dysfunctions.',
      schedule: 'Mon - Sat: 09:00 AM - 02:00 PM (Emergency 24x7)',
      color: '#0284c7',
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
    <div className="section-padding">
      <div className="container">
        {/* Title Block */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="badge">Medical Team</span>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Our Medical Specialists</h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.2rem' }}>
            Consult our panel of experienced, compassionate physicians dedicated to providing premium diagnostic and treatment standards.
          </p>
        </div>

        {/* Doctor Grid */}
        <div className="grid-3" style={{ gap: '30px' }}>
          {doctorsList.map((doc, idx) => (
            <div key={idx} className="doctor-profile-card">
              {/* Doctor Avatar */}
              <div className="doctor-photo-wrap" style={{ height: '280px' }}>
                {doc.svgAvatar}
              </div>

              {/* Doctor Details */}
              <div className="doctor-card-body">
                <div className="doctor-badge-tag" style={{ color: doc.color }}>
                  🩺 {doc.specialty}
                </div>
                
                <h3 style={{ fontSize: '1.4rem', marginBottom: '4px' }}>{doc.name}</h3>
                <div className="doctor-card-qualifications" style={{ fontSize: '0.85rem', marginBottom: '14px' }}>
                  {doc.degree}
                </div>
                
                <p className="doctor-card-description" style={{ fontSize: '0.9rem', marginBottom: '16px' }}>
                  {doc.description}
                </p>

                <div className="doctor-experience-tag">
                  💼 {doc.experience}
                </div>

                <div style={{
                  borderTop: '1px solid #f1f5f9',
                  paddingTop: '16px',
                  marginTop: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <span>⏰</span>
                    <span><strong>Hours:</strong> {doc.schedule}</span>
                  </div>
                  
                  <a href={doc.linkPath} className="btn btn-primary" style={{ width: '100%', padding: '10px 16px', borderRadius: '30px', fontSize: '0.85rem', textAlign: 'center' }}>
                    Schedule Consultation
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
