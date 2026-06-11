import React from 'react';

const items = [
  {
    id: 'collapseOne',
    icon: '🔍',
    title: 'Analyse Your Text',
    body: 'TextUtils gives you a fast and efficient way to analyse your text. Get instant word count, character count, reading time estimates, and more — all in one place.',
  },
  {
    id: 'collapseTwo',
    icon: '🆓',
    title: 'Free to Use',
    body: 'TextUtils is a completely free character counter and word counter tool. It provides instant statistics for any given text and is suitable for content with word or character limits.',
  },
  {
    id: 'collapseThree',
    icon: '🌐',
    title: 'Browser Compatible',
    body: 'Works in any modern web browser — Chrome, Firefox, Safari, Edge, Opera, and more. Perfect for counting characters in documents, social posts, essays, and spreadsheets.',
  },
  {
    id: 'collapseFour',
    icon: '⚡',
    title: 'Instant Processing',
    body: 'All text processing happens right in your browser — no server round trips, no waiting. Your data stays private and results appear instantly as you type.',
  },
];

export default function About(props) {
  const t = props.themes[props.mode];

  const pageStyle = {
    transition: 'all 0.4s ease',
  };

  const headingStyle = {
    color: t.text,
    fontWeight: '800',
    fontSize: 'clamp(1.4rem, 5vw, 2rem)',
    marginBottom: '6px',
  };

  const subheadingStyle = {
    color: t.subtext,
    fontSize: 'clamp(0.88rem, 3vw, 1rem)',
    marginBottom: '32px',
  };

  const cardStyle = {
    backgroundColor: t.surface,
    border: `1px solid ${t.border}`,
    borderRadius: '14px',
    marginBottom: '14px',
    overflow: 'hidden',
    boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
    transition: 'all 0.3s ease',
  };

  const btnStyle = {
    backgroundColor: t.surface,
    color: t.text,
    border: 'none',
    width: '100%',
    textAlign: 'left',
    padding: 'clamp(12px, 3vw, 18px) 20px',
    fontSize: 'clamp(0.9rem, 3vw, 1rem)',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    transition: 'background 0.2s ease',
  };

  const bodyStyle = {
    backgroundColor: t.bg,
    color: t.subtext,
    padding: '16px 20px',
    fontSize: '0.95rem',
    lineHeight: '1.7',
    borderTop: `1px solid ${t.border}`,
  };

  const accentLine = {
    display: 'inline-block',
    width: '48px',
    height: '4px',
    backgroundColor: t.accent,
    borderRadius: '4px',
    marginBottom: '24px',
  };

  return (
    <div className="container my-5" style={pageStyle}>
      <h1 style={headingStyle}>About TextUtils</h1>
      <div style={accentLine}></div>
      <p style={subheadingStyle}>A simple, fast, and free text analysis tool built with React.</p>

      <div className="accordion" id="aboutAccordion">
        {items.map((item, index) => (
          <div key={item.id} style={cardStyle}>
            <h2 className="accordion-header">
              <button
                style={btnStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${item.id}`}
                aria-expanded={index === 0 ? 'true' : 'false'}
                aria-controls={item.id}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = t.bg}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = t.surface}
              >
                <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
                <span>{item.title}</span>
                <span style={{ marginLeft: 'auto', color: t.accent, fontSize: '0.9rem' }}>▾</span>
              </button>
            </h2>
            <div
              id={item.id}
              className={`accordion-collapse collapse${index === 0 ? ' show' : ''}`}
              data-bs-parent="#aboutAccordion"
            >
              <div style={bodyStyle}>{item.body}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer badge */}
      <div className="text-center mt-5">
        <span style={{
          display: 'inline-block',
          backgroundColor: t.surface,
          color: t.subtext,
          border: `1px solid ${t.border}`,
          borderRadius: '50px',
          padding: '8px 24px',
          fontSize: '0.85rem',
        }}>
          Built with ❤️ using React & Bootstrap
        </span>
      </div>
    </div>
  );
}
