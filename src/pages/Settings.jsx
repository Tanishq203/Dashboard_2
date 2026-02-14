function Settings() {
  return (
    <section className="page">
      <h2 className="page-title">Settings</h2>
      <p className="page-subtitle">Tune system preferences and controls.</p>
      <div className="page-grid">
        <article className="panel">
          <h3>Theme</h3>
          <p>Cinematic mode is active.</p>
        </article>
        <article className="panel">
          <h3>Notifications</h3>
          <p>Alerts are configured for critical events.</p>
        </article>
      </div>
    </section>
  );
}

export default Settings;
