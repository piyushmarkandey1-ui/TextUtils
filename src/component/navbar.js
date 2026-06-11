import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const t = props.themes[props.mode];

  const navStyle = {
    background: t.navBg,
    borderBottom: `1px solid ${t.border}`,
    boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
    transition: 'all 0.4s ease',
  };

  const brandStyle = {
    color: t.accent,
    fontWeight: '700',
    fontSize: '1.4rem',
    letterSpacing: '1px',
    textDecoration: 'none',
  };

  const linkStyle = {
    color: t.text,
    fontWeight: '500',
    transition: 'color 0.2s',
  };

  return (
    <nav style={navStyle} className="navbar navbar-expand-lg">
      <div className="container-fluid px-4">
        <Link style={brandStyle} to="/">{props.title}</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: t.border }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" style={linkStyle} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={linkStyle} to="/about">{props.aboutText}</Link>
            </li>
          </ul>

          {/* Theme Switcher */}
          <div className="d-flex align-items-center flex-wrap gap-2">
            <span style={{ color: t.subtext, fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.5px' }}>
              THEME
            </span>
            {Object.entries(props.themes).map(([key, theme]) => (
              <button
                key={key}
                onClick={() => props.changeTheme(key)}
                title={theme.label}
                style={{
                  background: props.mode === key
                    ? theme.accent
                    : 'transparent',
                  color: props.mode === key ? '#fff' : t.subtext,
                  border: `1.5px solid ${props.mode === key ? theme.accent : t.border}`,
                  borderRadius: '20px',
                  padding: '4px 12px',
                  fontSize: '0.78rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  whiteSpace: 'nowrap',
                  boxShadow: props.mode === key ? `0 0 10px ${theme.accent}55` : 'none',
                }}
              >
                {theme.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
  mode: PropTypes.string.isRequired,
  themes: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  aboutText: 'About',
};
