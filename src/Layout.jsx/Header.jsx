import { memo } from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-brand">
          <span className="brand-dot" aria-hidden="true" />
          <h1>Dashboard</h1>
        </div>
        <span className="header-chip">Live View</span>
      </div>
    </header>
  );
}

export default memo(Header);
