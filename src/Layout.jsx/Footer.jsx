import { memo } from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner" >
        <p>Dashboard By Tanishq</p>
        <span>v1.0</span>
      </div>
    </footer>
  );
}

export default memo(Footer);
