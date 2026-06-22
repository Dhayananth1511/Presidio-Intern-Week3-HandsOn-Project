function Settings() {
  return (
    <div className="glass-card">
      <h1>Settings</h1>
      
      <section style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
          User Profile
        </h3>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', opacity: 0.6, marginBottom: '0.4rem' }}>Display Name</label>
            <input placeholder="John Doe" defaultValue="Guest User" />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', opacity: 0.6, marginBottom: '0.4rem' }}>Email Address</label>
            <input placeholder="user@example.com" />
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
          App Preferences
        </h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <span>Email Notifications</span>
          <div style={{ width: '40px', height: '20px', background: 'var(--primary)', borderRadius: '20px', position: 'relative', cursor: 'pointer' }}>
             <div style={{ width: '16px', height: '16px', background: 'white', borderRadius: '50%', position: 'absolute', right: '2px', top: '2px' }}></div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Compact Mode</span>
          <div style={{ width: '40px', height: '20px', background: '#cbd5e1', borderRadius: '20px', position: 'relative', cursor: 'pointer' }}>
             <div style={{ width: '16px', height: '16px', background: 'white', borderRadius: '50%', position: 'absolute', left: '2px', top: '2px' }}></div>
          </div>
        </div>
      </section>

      <section>
        <button style={{ backgroundColor: '#64748b', marginRight: '1rem' }}>Save Changes</button>
        <button style={{ backgroundColor: 'transparent', border: '1px solid #ef4444', color: '#ef4444' }}>Reset Data</button>
      </section>
    </div>
  );
}

export default Settings;
