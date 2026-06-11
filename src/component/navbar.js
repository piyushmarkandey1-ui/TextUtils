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
    <>
    <nav style={navStyle} className="navbar navbar-expand-lg">
      <div className="container-fluid px-3">
        <Link style={brandStyle} to="/">{props.title}</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            borderColor: t.border,
            padding: '6px 10px',
          }}
        >
          {/* Custom hamburger — always visible regardless of theme */}
          <span style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block',
                width: '22px',
                height: '2px',
                borderRadius: '2px',
                backgroundColor: t.accent,
                transition: 'background-color 0.3s ease',
              }} />
            ))}
          </span>
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

          {/* ── Desktop theme pills (hidden on mobile) ── */}
          <div className="d-none d-lg-flex align-items-center gap-2">
            <span style={{ color: t.subtext, fontSize: '0.8rem', fontWeight: '600', letterSpacing: '0.5px' }}>
              THEME
            </span>
            {Object.entries(props.themes).map(([key, theme]) => (
              <button
                key={key}
                onClick={() => props.changeTheme(key)}
                title={theme.label}
                style={{
                  background: props.mode === key ? theme.accent : 'transparent',
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

    {/* ── Mobile-only persistent theme bar (fixed at bottom) ── */}
    <div className="d-lg-none mobile-theme-bar" style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1050,
      background: t.navBg,
      borderTop: `1px solid ${t.border}`,
      boxShadow: '0 -4px 20px rgba(0,0,0,0.4)',
      padding: '8px 12px 10px',
    }}>
      <p style={{
        color: t.subtext,
        fontSize: '0.65rem',
        fontWeight: '700',
        letterSpacing: '1.2px',
        textTransform: 'uppercase',
        margin: '0 0 7px 2px',
      }}>Theme</p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${Object.keys(props.themes).length}, 1fr)`,
        gap: '6px',
      }}>
        {Object.entries(props.themes).map(([key, theme]) => {
          const isActive = props.mode === key;
          return (
            <button
              key={key}
              onClick={() => props.changeTheme(key)}
              title={theme.label}
              style={{
                background: isActive
                  ? `linear-gradient(135deg, ${theme.accent}44, ${theme.accent}22)`
                  : theme.surface,
                border: `2px solid ${isActive ? theme.accent : t.border}`,
                borderRadius: '10px',
                padding: '6px 4px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                boxShadow: isActive ? `0 0 10px ${theme.accent}55` : 'none',
              }}
            >
              {/* Colored dot */}
              <span style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: theme.accent,
                display: 'block',
                boxShadow: `0 0 6px ${theme.accent}99`,
                outline: isActive ? `2px solid ${theme.accent}` : '2px solid transparent',
                outlineOffset: '2px',
              }} />
              {/* Short label */}
              <span style={{
                fontSize: '0.6rem',
                fontWeight: '700',
                color: isActive ? theme.accent : t.subtext,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '100%',
              }}>
                {/* Strip emoji, keep just the word */}
                {theme.label.replace(/^\S+\s/, '')}
              </span>
            </button>
          );
        })}
      </div>
    </div>
    </>
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
