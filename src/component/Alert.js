import React from 'react';

export default function Alert(props) {
  if (!props.alert) return null;

  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  const type = props.alert.type || 'info';

  // Beautiful alert palette that works on any theme background
  const alertPalettes = {
    success: { bg: '#0d3321', border: '#1a7a45', color: '#4ade80', icon: '✅' },
    danger:  { bg: '#3b0d0d', border: '#922b2b', color: '#f87171', icon: '❌' },
    warning: { bg: '#2d1f00', border: '#916c00', color: '#fbbf24', icon: '⚠️' },
    info:    { bg: '#062030', border: '#0e6a9e', color: '#38bdf8', icon: 'ℹ️' },
    primary: { bg: '#0c1f44', border: '#1d4ed8', color: '#93c5fd', icon: '💡' },
  };

  const palette = alertPalettes[type] || alertPalettes.info;

  return (
    <div
      role="alert"
      style={{
        backgroundColor: palette.bg,
        border: `1px solid ${palette.border}`,
        color: palette.color,
        borderRadius: '10px',
        padding: '12px 20px',
        margin: '10px 16px 0',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '0.9rem',
        fontWeight: '500',
        boxShadow: `0 0 16px ${palette.border}44`,
        animation: 'fadeSlideIn 0.3s ease',
      }}
    >
      <span style={{ fontSize: '1rem' }}>{palette.icon}</span>
      <span><strong>{capitalize(type)}</strong>: {props.alert.msg}</span>
    </div>
  );
}
