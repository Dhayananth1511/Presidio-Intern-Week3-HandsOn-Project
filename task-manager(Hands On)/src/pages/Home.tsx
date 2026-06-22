function Home() {
  return (
    <div className="glass-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h1>Welcome Back</h1>
      <p style={{ opacity: 0.8, fontSize: '1.2rem', maxWidth: '500px', margin: '0 auto' }}>
        Manage your tasks with ease and stay productive throughout the day.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <a href="/tasks">
          <button style={{ fontSize: '1.1rem' }}>Get Started →</button>
        </a>
      </div>
    </div>
  );
}

export default Home;
