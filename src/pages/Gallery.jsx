export default function Gallery() {
  const galleryItems = [
    {
      title: 'Hospital Facade & Entrance',
      category: 'Exterior',
      description: 'Centrally located Plot No. 2 building on Station Road, featuring clear signage and dual-gated ambulance pathways.',
      icon: '🏢',
      color: 'linear-gradient(135deg, #1e293b 0%, #0d4a3b 100%)'
    },
    {
      title: 'Multispecialty ICU',
      category: 'Critical Care',
      description: 'Clean medical units with ventilators, multi-channel monitors, ceiling-mounted service columns, and central gas supplies.',
      icon: '🩺',
      color: 'linear-gradient(135deg, #0d4a3b 0%, #115e59 100%)'
    },
    {
      title: 'Orthopedic Laminar Flow OT',
      category: 'Surgical Suites',
      description: 'Ultra-sterile surgical theaters equipped with HEPA filtration, surgical microscopes, and advanced orthotropic tables.',
      icon: '🔪',
      color: 'linear-gradient(135deg, #581c87 0%, #3b0764 100%)'
    },
    {
      title: 'Maternity Delivery Suites',
      category: 'Obstetrics',
      description: 'Comfortable private labor rooms fitted with high-sensitivity fetal monitors and baby warming incubators.',
      icon: '👶',
      color: 'linear-gradient(135deg, #c2410c 0%, #7c2d12 100%)'
    },
    {
      title: 'High-Dependency Unit (HDU)',
      category: 'Step-Down Care',
      description: 'Highly clinical ward configured for intensive observation of post-surgical recovery and acute pathology stabilization.',
      icon: '💖',
      color: 'linear-gradient(135deg, #15803d 0%, #052e16 100%)'
    },
    {
      title: 'OPD Reception & Rooms',
      category: 'Outpatient Care',
      description: 'Comfortable waiting lounges, registration counters, and private physician consultation chambers.',
      icon: '🏥',
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
          fontSize: '0.95rem'
        }}>
          💡 <strong>Notice:</strong> We are currently updating our high-definition site photographs and video walkthroughs. Below are illustrations of our active zones.
        </div>

        {/* Gallery Grid */}
        <div className="grid-3" style={{ gap: '30px' }}>
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="card"
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
                fontSize: '5rem',
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
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span>✓ Verified Ward Setup</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
