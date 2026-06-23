export default function Gallery() {
  const galleryItems = [
    {
      title: 'Hospital Facade & Entrance',
      category: 'Exterior',
      description: 'Centrally located Plot No. 2 building on Station Road, featuring clear signage and dual-gated ambulance pathways.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
          <line x1="9" y1="22" x2="9" y2="16"/>
          <line x1="15" y1="22" x2="15" y2="16"/>
          <line x1="9" y1="16" x2="15" y2="16"/>
          <path d="M8 6h2v2H8V6zm4 0h2v2h-2V6zm-4 4h2v2H8v-2zm4 0h2v2h-2v-2z"/>
        </svg>
      ),
      color: 'linear-gradient(135deg, #1e293b 0%, #0d4a3b 100%)'
    },
    {
      title: 'Multispecialty ICU',
      category: 'Critical Care',
      description: 'Clean medical units with ventilators, multi-channel monitors, ceiling-mounted service columns, and central gas supplies.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      color: 'linear-gradient(135deg, #0d4a3b 0%, #115e59 100%)'
    },
    {
      title: 'Orthopedic Laminar Flow OT',
      category: 'Surgical Suites',
      description: 'Ultra-sterile surgical theaters equipped with HEPA filtration, surgical microscopes, and advanced orthotropic tables.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 0-7.94-7.94L9.76 1.4a1 1 0 0 0 0 1.4L11.4 4.4z"/>
          <path d="m2 22 12.3-12.3"/>
        </svg>
      ),
      color: 'linear-gradient(135deg, #581c87 0%, #3b0764 100%)'
    },
    {
      title: 'Maternity Delivery Suites',
      category: 'Obstetrics',
      description: 'Comfortable private labor rooms fitted with high-sensitivity fetal monitors and baby warming incubators.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M12 8v8"/>
          <path d="M8 12h8"/>
        </svg>
      ),
      color: 'linear-gradient(135deg, #c2410c 0%, #7c2d12 100%)'
    },
    {
      title: 'High-Dependency Unit (HDU)',
      category: 'Step-Down Care',
      description: 'Highly clinical ward configured for intensive observation of post-surgical recovery and acute pathology stabilization.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
      color: 'linear-gradient(135deg, #15803d 0%, #052e16 100%)'
    },
    {
      title: 'OPD Reception & Rooms',
      category: 'Outpatient Care',
      description: 'Comfortable waiting lounges, registration counters, and private physician consultation chambers.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="12" y1="8" x2="12" y2="16"/>
          <line x1="8" y1="12" x2="16" y2="12"/>
        </svg>
      ),
      color: 'linear-gradient(135deg, #0369a1 0%, #0c4a6e 100%)'
    }
  ];

  return (
    <div className="section-padding">
      <div className="container">
        {/* Title Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="badge">Gallery</span>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Facility Tour</h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.2rem' }}>
            Take a virtual tour of the medical infrastructure and patient care wards at Sai Sanjeevani Hospital.
          </p>
        </div>

        {/* Informative Note */}
        <div style={{
          backgroundColor: 'var(--primary-light)',
          border: '1px solid rgba(13, 74, 59, 0.1)',
          padding: '20px',
          borderRadius: 'var(--border-radius-md)',
          marginBottom: '40px',
          textAlign: 'center',
          fontSize: '0.95rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary-color)' }}>
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
          <span><strong>Notice:</strong> We are currently updating our high-definition site photographs and video walkthroughs. Below are illustrations of our active zones.</span>
        </div>

        {/* Gallery Grid */}
        <div className="grid-3" style={{ gap: '30px' }}>
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="card animate-on-scroll"
              style={{
                padding: 0,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '420px',
                position: 'relative',
                border: '1px solid rgba(13, 74, 59, 0.08)'
              }}
            >
              {/* Graphic Placeholder (Premium Gradient + SVG Icon) */}
              <div style={{
                height: '240px',
                background: item.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                color: '#ffffff'
              }}>
                {item.icon}
                <span style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(4px)',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  letterSpacing: '1px'
                }}>
                  {item.category}
                </span>
              </div>

              {/* Caption Content */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--primary-color)' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>{item.description}</p>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary-color)' }}>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Verified Ward Setup</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
