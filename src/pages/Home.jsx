function Home() {
  return (
    <section className="page">
      <h2 className="page-title">Home</h2>
      <p className="page-subtitle">Overview of your dashboard activity.</p>
      <div className="page-grid">
        <article className="panel">
          <h3>System Health</h3>
          <p>All services are running normally.</p>
        </article>
        <article className="panel">
          <h3>Quick Status</h3>
          <p>4 active modules, 0 alerts.</p>
        </article>
      </div>
    </section>
  );
}

export default Home;
