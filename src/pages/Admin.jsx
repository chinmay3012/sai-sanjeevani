import { useState, useEffect } from 'react';
import { db } from '@/lib/db';

export default function Admin() {
  const [auth, setAuth] = useState({
    username: '',
    password: '',
    checked: false,
    loggedIn: false,
    error: null
  });

  const [data, setData] = useState({
    appointments: [],
    messages: [],
    loading: true,
    error: null
  });

  const [activeTab, setActiveTab] = useState('appointments'); // appointments, messages
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Check login status on load
  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = () => {
    if (typeof window !== 'undefined') {
      const isLogged = sessionStorage.getItem('admin_logged_in') === 'true';
      if (isLogged) {
        setAuth(prev => ({ ...prev, checked: true, loggedIn: true }));
        fetchDashboardData();
      } else {
        setAuth(prev => ({ ...prev, checked: true, loggedIn: false }));
      }
    } else {
      setAuth(prev => ({ ...prev, checked: true, loggedIn: false }));
    }
  };

  const fetchDashboardData = () => {
    setData(prev => ({ ...prev, loading: true, error: null }));
    try {
      const appointments = db.getAppointments();
      const messages = db.getMessages();
      
      // Sort by date/createdAt descending
      appointments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      messages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      setData({
        appointments: appointments || [],
        messages: messages || [],
        loading: false,
        error: null
      });
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
      setData(prev => ({ ...prev, loading: false, error: 'Failed to retrieve stored records.' }));
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setAuth(prev => ({ ...prev, error: null }));

    if (!auth.username || !auth.password) {
      setAuth(prev => ({ ...prev, error: 'Please enter both fields.' }));
      return;
    }

    try {
      const isValid = db.validateAdmin(auth.username, auth.password);
      
      if (isValid) {
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('admin_logged_in', 'true');
        }
        setAuth(prev => ({ ...prev, loggedIn: true, password: '' }));
        fetchDashboardData();
      } else {
        setAuth(prev => ({ ...prev, error: 'Invalid username or password.' }));
      }
    } catch (err) {
      console.error('Login error:', err);
      setAuth(prev => ({ ...prev, error: 'An error occurred during authentication.' }));
    }
  };

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('admin_logged_in');
    }
    setAuth(prev => ({ ...prev, loggedIn: false, username: '', password: '' }));
    setData({ appointments: [], messages: [], loading: true, error: null });
  };

  const updateItemStatus = (type, id, newStatus) => {
    try {
      let updated = null;
      if (type === 'appointment') {
        updated = db.updateAppointmentStatus(id, newStatus);
        if (updated) {
          setData(prev => ({
            ...prev,
            appointments: prev.appointments.map(a => a.id === id ? { ...a, status: newStatus } : a)
          }));
        }
      } else if (type === 'message') {
        updated = db.updateMessageStatus(id, newStatus);
        if (updated) {
          setData(prev => ({
            ...prev,
            messages: prev.messages.map(m => m.id === id ? { ...m, status: newStatus } : m)
          }));
        }
      }
      
      if (!updated) {
        alert('Item not found or failed to update.');
      }
    } catch (err) {
      console.error('Error updating status:', err);
      alert('Error updating item status.');
    }
  };

  // Filter Appointments
  const getFilteredAppointments = () => {
    return data.appointments.filter(appt => {
      const matchesSearch = 
        appt.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        appt.phone.includes(searchTerm) ||
        appt.doctor.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'All' || appt.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  };

  // Filter Messages
  const getFilteredMessages = () => {
    return data.messages.filter(msg => {
      const matchesSearch = 
        msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.phone.includes(searchTerm) ||
        msg.message.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'All' || msg.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  };

  // Count states
  const pendingAppointmentsCount = data.appointments.filter(a => a.status === 'Pending').length;
  const unreadMessagesCount = data.messages.filter(m => m.status === 'Unread').length;

  if (!auth.checked) {
    return (
      <div className="section-padding" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h3 style={{ color: 'var(--primary-color)' }}>Checking system authorization...</h3>
      </div>
    );
  }

  // Login Screen
  if (!auth.loggedIn) {
    return (
      <div className="section-padding" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f1f5f9' }}>
        <div className="card" style={{ width: '100%', maxWidth: '440px', padding: 0, overflow: 'hidden', border: 'none', boxShadow: 'var(--shadow-lg)' }}>
          {/* Portal Header */}
          <div style={{ backgroundColor: 'var(--bg-dark-green)', padding: '30px 24px', textAlign: 'center', color: '#ffffff' }}>
            <div className="logo-icon" style={{ backgroundColor: '#ffffff', color: 'var(--primary-color)', margin: '0 auto 12px auto' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21C12 21 20 16 20 10C20 5 16 3 12 3C8 3 4 5 4 10C4 16 12 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 style={{ color: 'var(--text-light)', fontSize: '1.4rem', marginBottom: '4px' }}>Sai Sanjeevani Portal</h2>
            <p style={{ color: 'var(--accent-color)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', margin: 0, fontWeight: 700 }}>Clinical System Access</p>
          </div>

          <div style={{ padding: '32px 30px' }}>
            <div style={{
              backgroundColor: 'var(--primary-light)',
              padding: '12px 16px',
              borderRadius: 'var(--border-radius-sm)',
              fontSize: '0.85rem',
              marginBottom: '24px',
              color: 'var(--primary-color)',
              border: '1px solid rgba(13, 74, 59, 0.1)',
              display: 'flex',
              gap: '8px',
              alignItems: 'flex-start'
            }}>
              <span style={{ fontSize: '1.1rem' }}>🔑</span>
              <div>
                <strong>Demo Credentials:</strong><br />
                Username: <code>admin</code> | Password: <code>sanjeevani123</code>
              </div>
            </div>

            {auth.error && (
              <div style={{
                backgroundColor: '#fee2e2',
                color: '#991b1b',
                padding: '12px 18px',
                borderRadius: '30px',
                marginBottom: '20px',
                fontSize: '0.85rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <span>⚠️</span> {auth.error}
              </div>
            )}

            <form onSubmit={handleLoginSubmit}>
              <div className="form-group" style={{ marginBottom: '16px' }}>
                <label className="form-label">Username / CR No</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter admin username"
                    value={auth.username}
                    onChange={e => setAuth({ ...auth, username: e.target.value })}
                    style={{ paddingLeft: '44px' }}
                    required
                  />
                  <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>👤</span>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label className="form-label">Password</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="password"
                    className="form-input"
                    placeholder="Enter security key"
                    value={auth.password}
                    onChange={e => setAuth({ ...auth, password: e.target.value })}
                    style={{ paddingLeft: '44px' }}
                    required
                  />
                  <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>🔒</span>
                </div>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', borderRadius: '30px' }}>
                Access Clinical System →
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard Panel Screen
  return (
    <div className="section-padding" style={{ backgroundColor: '#f8fafc', minHeight: '90vh' }}>
      <div className="container">
        
        {/* Dashboard Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '36px',
          borderBottom: '1px solid #e2e8f0',
          paddingBottom: '20px'
        }}>
          <div>
            <h1 style={{ fontSize: '2.2rem', marginBottom: '4px' }}>Sai Sanjeevani Administrative Portal</h1>
            <p style={{ margin: 0 }}>Review schedules, patient queues, and digital queries in real time.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={fetchDashboardData} className="btn btn-outline-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
              🔄 Refresh Data
            </button>
            <button onClick={handleLogout} className="btn btn-secondary" style={{ padding: '10px 20px', fontSize: '0.9rem', backgroundColor: 'var(--secondary-color)' }}>
              🚪 Log Out
            </button>
          </div>
        </div>

        {/* Highlight Statistics */}
        <div className="grid-3" style={{ gap: '20px', marginBottom: '40px' }}>
          <div className="card stat-highlight-card" style={{ borderLeft: '4px solid var(--primary-color)' }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', margin: '0 0 6px 0' }}>Appointments Pending</p>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', margin: 0 }}>{pendingAppointmentsCount}</h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '8px 0 0 0' }}>Total booked: {data.appointments.length}</p>
          </div>

          <div className="card stat-highlight-card" style={{ borderLeft: '4px solid var(--accent-color)' }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', margin: '0 0 6px 0' }}>Unread Inquiries</p>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-color)', margin: 0 }}>{unreadMessagesCount}</h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '8px 0 0 0' }}>Total queries: {data.messages.length}</p>
          </div>

          <div className="card stat-highlight-card" style={{ borderLeft: '4px solid var(--secondary-color)' }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', margin: '0 0 6px 0' }}>Total Operations</p>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', margin: 0 }}>
              {data.appointments.filter(a => a.status === 'Confirmed').length}
            </h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '8px 0 0 0' }}>Confirmed and scheduled consultations</p>
          </div>
        </div>

        {/* Tab Selection */}
        <div style={{ display: 'flex', gap: '8px', borderBottom: '2px solid #e2e8f0', marginBottom: '24px' }}>
          <button
            onClick={() => { setActiveTab('appointments'); setSearchTerm(''); setStatusFilter('All'); }}
            style={{
              padding: '12px 24px',
              fontSize: '1rem',
              fontWeight: 700,
              backgroundColor: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'appointments' ? '3px solid var(--primary-color)' : '3px solid transparent',
              color: activeTab === 'appointments' ? 'var(--primary-color)' : 'var(--text-muted)',
              cursor: 'pointer',
              transition: 'var(--transition-fast)'
            }}
          >
            📋 Appointment Bookings ({data.appointments.length})
          </button>
          <button
            onClick={() => { setActiveTab('messages'); setSearchTerm(''); setStatusFilter('All'); }}
            style={{
              padding: '12px 24px',
              fontSize: '1rem',
              fontWeight: 700,
              backgroundColor: 'transparent',
              border: 'none',
              borderBottom: activeTab === 'messages' ? '3px solid var(--primary-color)' : '3px solid transparent',
              color: activeTab === 'messages' ? 'var(--primary-color)' : 'var(--text-muted)',
              cursor: 'pointer',
              transition: 'var(--transition-fast)'
            }}
          >
            💬 Patient Inquiries ({data.messages.length})
          </button>
        </div>

        {/* Search & Filters Controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          backgroundColor: 'var(--bg-white)',
          padding: '16px 24px',
          borderRadius: 'var(--border-radius-md)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '24px'
        }}>
          <div style={{ flex: '1 1 300px', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #cbd5e1', borderRadius: '30px', padding: '8px 16px', backgroundColor: 'var(--bg-cream)' }}>
            <span style={{ fontSize: '1rem' }}>🔍</span>
            <input
              type="text"
              placeholder={activeTab === 'appointments' ? 'Search by patient name, phone, doctor...' : 'Search by name, phone, message content...'}
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '0.9rem' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>Status Filter:</span>
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              className="form-select"
              style={{ width: 'auto', padding: '8px 32px 8px 16px', fontSize: '0.85rem' }}
            >
              <option value="All">All statuses</option>
              {activeTab === 'appointments' ? (
                <>
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Cancelled">Cancelled</option>
                </>
              ) : (
                <>
                  <option value="Unread">Unread</option>
                  <option value="Read">Read</option>
                </>
              )}
            </select>
          </div>
        </div>

        {/* Data Loading States */}
        {data.loading ? (
          <div style={{ textAlign: 'center', padding: '60px' }}>
            <h3 style={{ color: 'var(--primary-color)' }}>Loading records...</h3>
          </div>
        ) : data.error ? (
          <div style={{
            backgroundColor: '#fee2e2',
            color: '#991b1b',
            padding: '20px',
            borderRadius: 'var(--border-radius-md)',
            textAlign: 'center'
          }}>
            <h3>Error Loading Dashboard Data</h3>
            <p>{data.error}</p>
            <button onClick={fetchDashboardData} className="btn btn-primary" style={{ marginTop: '12px' }}>Retry Connection</button>
          </div>
        ) : activeTab === 'appointments' ? (
          /* TAB 1: Appointments List Table */
          <div className="admin-table-container">
            {getFilteredAppointments().length === 0 ? (
              <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
                No appointments matched your query filter.
              </div>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Contact Info</th>
                    <th>Date & Time Slot</th>
                    <th>Department & Doctor</th>
                    <th>Status</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {getFilteredAppointments().map((appt) => (
                    <tr key={appt.id}>
                      <td>
                        <strong style={{ fontSize: '1.05rem' }}>{appt.patientName}</strong>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>ID: {appt.id.slice(0, 8).toUpperCase()}</div>
                      </td>
                      <td>
                        <div>📞 {appt.phone}</div>
                        {appt.email && <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>✉️ {appt.email}</div>}
                      </td>
                      <td>
                        <div>📅 {appt.date}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>⏰ {appt.timeSlot}</div>
                      </td>
                      <td>
                        <div>🏢 {appt.department}</div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-color)' }}>👨‍⚕️ {appt.doctor}</div>
                      </td>
                      <td>
                        <span className={`status-pill status-${appt.status.toLowerCase()}`}>
                          {appt.status}
                        </span>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        {appt.status === 'Pending' && (
                          <div style={{ display: 'inline-flex', gap: '8px' }}>
                            <button
                              onClick={() => updateItemStatus('appointment', appt.id, 'Confirmed')}
                              style={{
                                backgroundColor: '#d1fae5',
                                color: '#065f46',
                                border: '1px solid #a7f3d0',
                                padding: '6px 12px',
                                borderRadius: '20px',
                                fontSize: '0.8rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'var(--transition-fast)'
                              }}
                            >
                              ✓ Confirm
                            </button>
                            <button
                              onClick={() => updateItemStatus('appointment', appt.id, 'Cancelled')}
                              style={{
                                backgroundColor: '#fee2e2',
                                color: '#991b1b',
                                border: '1px solid #fecaca',
                                padding: '6px 12px',
                                borderRadius: '20px',
                                fontSize: '0.8rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'var(--transition-fast)'
                              }}
                            >
                              ✕ Cancel
                            </button>
                          </div>
                        )}
                        {appt.status !== 'Pending' && (
                          <button
                            onClick={() => updateItemStatus('appointment', appt.id, 'Pending')}
                            style={{
                              backgroundColor: '#f1f5f9',
                              color: '#475569',
                              border: '1px solid #e2e8f0',
                              padding: '6px 12px',
                              borderRadius: '20px',
                              fontSize: '0.8rem',
                              fontWeight: 700,
                              cursor: 'pointer'
                            }}
                          >
                            Revert to Review
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ) : (
          /* TAB 2: Inquiries List Card Stack */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {getFilteredMessages().length === 0 ? (
              <div className="card" style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
                No patient inquiries matched your query filter.
              </div>
            ) : (
              getFilteredMessages().map((msg) => (
                <div
                  key={msg.id}
                  className="card"
                  style={{
                    padding: '28px',
                    backgroundColor: 'var(--bg-white)',
                    borderLeft: msg.status === 'Unread' ? '6px solid var(--accent-color)' : '6px solid #94a3b8'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-color)', margin: '0 0 4px 0' }}>{msg.name}</h3>
                      <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        <span>📞 {msg.phone}</span>
                        {msg.email && <span>✉️ {msg.email}</span>}
                        <span>📅 Received: {new Date(msg.createdAt).toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span className={`status-pill status-${msg.status.toLowerCase()}`}>
                        {msg.status}
                      </span>
                      
                      {msg.status === 'Unread' && (
                        <button
                          onClick={() => updateItemStatus('message', msg.id, 'Read')}
                          style={{
                            backgroundColor: '#eef6f3',
                            color: 'var(--primary-color)',
                            border: '1px solid rgba(13, 74, 59, 0.1)',
                            padding: '6px 14px',
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            transition: 'var(--transition-fast)'
                          }}
                        >
                          Mark as Read
                        </button>
                      )}
                    </div>
                  </div>

                  <p style={{
                    backgroundColor: 'var(--bg-cream)',
                    padding: '16px 20px',
                    borderRadius: 'var(--border-radius-sm)',
                    border: '1px solid rgba(13, 74, 59, 0.05)',
                    fontSize: '0.95rem',
                    color: 'var(--text-dark)',
                    margin: 0,
                    whiteSpace: 'pre-wrap'
                  }}>
                    {msg.message}
                  </p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
