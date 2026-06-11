export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  const alertPalettes = {
    success: { bg: '#0d3321', border: '#1a7a45', color: '#4ade80', icon: '✅' },
    danger:  { bg: '#3b0d0d', border: '#922b2b', color: '#f87171', icon: '❌' },
    warning: { bg: '#2d1f00', border: '#916c00', color: '#fbbf24', icon: '⚠️' },
    info:    { bg: '#062030', border: '#0e6a9e', color: '#38bdf8', icon: 'ℹ️' },
    primary: { bg: '#0c1f44', border: '#1d4ed8', color: '#93c5fd', icon: '💡' },
  };

  const type = props.alert?.type || 'info';
  const palette = alertPalettes[type] || alertPalettes.info;

  // Fixed-height wrapper — always occupies space to prevent CLS
  return (
    <div style={{ height: '50px', margin: '10px 16px 0' }}>
      {props.alert && (
        <div
          role="alert"
          style={{
            backgroundColor: palette.bg,
            border: `1px solid ${palette.border}`,
            color: palette.color,
            borderRadius: '10px',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '0.9rem',
            fontWeight: '500',
            boxShadow: `0 0 16px ${palette.border}44`,
            animation: 'fadeSlideIn 0.3s ease',
            height: '100%',
            boxSizing: 'border-box',
          }}
        >
          <span style={{ fontSize: '1rem' }}>{palette.icon}</span>
          <span><strong>{capitalize(type)}</strong>: {props.alert.msg}</span>
        </div>
      )}
    </div>
  );
}
