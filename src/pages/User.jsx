function User() {
  return (
    <section className="page">
      <h2 className="page-title">User</h2>
      <p className="page-subtitle">Manage profile and account details.</p>
      <div className="page-grid">
        <article className="panel">
          <h3>Profile</h3>
          <p>Name, email, and access metadata.</p>
        </article>
        <article className="panel">
          <h3>Permissions</h3>
          <p>Role-based access currently enabled.</p>
        </article>
      </div>
    </section>
  );
}

export default User;
