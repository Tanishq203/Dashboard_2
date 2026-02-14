function Camera() {
  return (
    <section className="page">
      <h2 className="page-title">System Status</h2>
      <p className="page-subtitle">Live stream and camera health summary.</p>
      <div className="page-grid">
        <article className="panel">
          <h3>Camera Feed</h3>
          <p>Stream is stable with low latency.</p>
        </article>
        <article className="panel">
          <h3>Network</h3>
          <p>Uptime 99.9% in the last 24 hours.</p>
        </article>
      </div>
    </section>
  );
}

export default Camera;
