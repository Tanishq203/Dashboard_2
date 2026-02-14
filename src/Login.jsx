import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const headlineLineOne = 'Secure Dashboard';
  const headlineLineTwo = 'Access';

  const handleLogin = () => {
    sessionStorage.setItem('isLoggedIn', 'true');
    navigate('/Home');
  };

  return (
    <div className="login-page">
      <div className="login-ambient" aria-hidden="true" />
      <div className="login-ambient login-ambient-two" aria-hidden="true" />

      <div className="browser-shell" aria-hidden="true">
        <div className="browser-top">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <div className="browser-url">Indusvision</div>
        </div>
        <div className="browser-body" />

        <div className="login-inline">
          <h2>Sign In</h2>
          <p>Access your dashboard securely.</p>

          <div className="login-form">
            <input className="login-input" type="text" placeholder="Email address" />
            <div className="password-field">
              <input
                className="login-input"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                aria-pressed={showPassword}
              >
                {showPassword ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 3l18 18" />
                    <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                    <path d="M9.9 5.2A11.9 11.9 0 0 1 12 5c6.8 0 10 7 10 7a17.4 17.4 0 0 1-4.1 4.9" />
                    <path d="M6.2 6.2C3.4 8 2 10.2 2 12c0 0 3.2 7 10 7 1.8 0 3.3-.5 4.7-1.2" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2 12s3.2-7 10-7 10 7 10 7-3.2 7-10 7S2 12 2 12Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
            <button type="button" className="login-btn" onClick={handleLogin}>
              Sign In
            </button>
          </div>
        </div>

      <div className="login-hero">
        <h1 aria-label="Secure Dashboard Access">
          <span className="hero-line" aria-hidden="true">
            {[...headlineLineOne].map((char, index) => (
              <span key={`line1-${index}`} className="hero-letter" style={{ '--char-index': index }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </span>
          <span className="hero-line hero-line-two" aria-hidden="true">
            {[...headlineLineTwo].map((char, index) => (
              <span
                key={`line2-${index}`}
                className="hero-letter"
                style={{ '--char-index': headlineLineOne.length + index + 1 }}
              >
                {char}
              </span>
            ))}
          </span>
        </h1>
      </div>
      </div>
      <div className="neon-ray neon-ray-left" aria-hidden="true" />
      <div className="neon-ray neon-ray-right" aria-hidden="true" />
      <div className="neon-pointer" aria-hidden="true" />
    </div>
  );
}

export default Login;
