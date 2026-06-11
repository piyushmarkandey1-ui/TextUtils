import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const t = props.themes[props.mode];

  const handleUpcase = () => {
    setText(text.toUpperCase());
    props.showalert('Converted to uppercase', 'success');
  };

  const handleLowcase = () => {
    setText(text.toLowerCase());
    props.showalert('Converted to lowercase', 'success');
  };

  const handleReverse = () => {
    setText(text.split('').reverse().join(''));
    props.showalert('Text has been reversed', 'success');
  };

  const handleClear = () => {
    setText('');
    props.showalert('Text cleared', 'success');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showalert('Copied to clipboard', 'success');
  };

  const handleOnchange = (e) => setText(e.target.value);

  const wordCount = text.split(' ').filter((w) => w.length !== 0).length;

  const containerStyle = {
    backgroundColor: t.surface,
    color: t.text,
    borderRadius: '16px',
    padding: 'clamp(16px, 4vw, 28px)',
    border: `1px solid ${t.border}`,
    boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
    transition: 'all 0.4s ease',
  };

  const textareaStyle = {
    backgroundColor: t.bg,
    color: t.text,
    border: `1.5px solid ${t.border}`,
    borderRadius: '10px',
    fontSize: '1rem',
    lineHeight: '1.6',
    resize: 'vertical',
    transition: 'all 0.3s ease',
    outline: 'none',
  };

  const labelStyle = {
    color: t.subtext,
    fontWeight: '600',
    fontSize: '0.9rem',
    letterSpacing: '0.5px',
    marginBottom: '8px',
  };

  const isEmpty = text.trim().length === 0;

  const btnStyle = (primary = true, disabled = false) => ({
    backgroundColor: disabled ? 'transparent' : primary ? t.accent : 'transparent',
    color: disabled ? t.border : primary ? '#fff' : t.subtext,
    border: `1.5px solid ${disabled ? t.border : primary ? t.accent : t.border}`,
    borderRadius: '8px',
    padding: '8px 18px',
    fontWeight: '600',
    fontSize: '0.85rem',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.25s ease',
    boxShadow: (!disabled && primary) ? `0 2px 10px ${t.accent}44` : 'none',
    opacity: disabled ? 0.45 : 1,
  });

  const statCardStyle = {
    backgroundColor: t.surface,
    color: t.text,
    borderRadius: '12px',
    padding: 'clamp(14px, 4vw, 24px)',
    border: `1px solid ${t.border}`,
    boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
    transition: 'all 0.4s ease',
  };

  const statBadge = {
    display: 'inline-block',
    backgroundColor: t.bg,
    color: t.accent,
    border: `1px solid ${t.border}`,
    borderRadius: '8px',
    padding: '4px 12px',
    fontWeight: '700',
    fontSize: '1.1rem',
    marginRight: '8px',
  };

  return (
    <>
      <div className="container my-4" style={containerStyle}>
        <div className="mb-3">
          <h1 style={{ ...labelStyle, fontSize: '1rem', marginBottom: '8px' }}>
            ✏️ {props.heading}
          </h1>
          <label htmlFor="myTextArea" className="visually-hidden">Enter your text</label>
          <textarea
            style={textareaStyle}
            className="form-control"
            id="myTextArea"
            rows="8"
            value={text}
            onChange={handleOnchange}
            placeholder="Start typing or paste your text here..."
          />
        </div>

        <div className="d-grid d-sm-flex flex-wrap gap-2 mt-3">
          <button className="btn-mobile" style={btnStyle(true, isEmpty)} disabled={isEmpty} onClick={handleUpcase}>⬆ Uppercase</button>
          <button className="btn-mobile" style={btnStyle(true, isEmpty)} disabled={isEmpty} onClick={handleLowcase}>⬇ Lowercase</button>
          <button className="btn-mobile" style={btnStyle(true, isEmpty)} disabled={isEmpty} onClick={handleReverse}>🔄 Reverse</button>
          <button className="btn-mobile" style={btnStyle(false, isEmpty)} disabled={isEmpty} onClick={handleCopy}>📋 Copy</button>
          <button className="btn-mobile" style={btnStyle(false, isEmpty)} disabled={isEmpty} onClick={handleClear}>🗑 Clear</button>
        </div>
      </div>

      <div className="container mb-4" style={statCardStyle}>
        <h2 style={{ color: t.accent, fontWeight: '700', marginBottom: '16px', fontSize: '1.1rem' }}>📊 Text Summary</h2>
        <div className="d-flex flex-wrap gap-3 mb-3">
          <div>
            <span style={statBadge}>{wordCount}</span>
            <span style={{ color: t.subtext, fontSize: '0.9rem' }}>Words</span>
          </div>
          <div>
            <span style={statBadge}>{text.length}</span>
            <span style={{ color: t.subtext, fontSize: '0.9rem' }}>Characters</span>
          </div>
          <div>
            <span style={statBadge}>{(0.008 * wordCount).toFixed(2)}</span>
            <span style={{ color: t.subtext, fontSize: '0.9rem' }}>Min to read</span>
          </div>
        </div>

        <h3 style={{ color: t.subtext, fontWeight: '600', marginBottom: '8px', fontSize: '1rem' }}>👁 Preview</h3>
        <p style={{ color: t.text, lineHeight: '1.7', fontStyle: text.length === 0 ? 'italic' : 'normal', opacity: text.length === 0 ? 0.5 : 1 }}>
          {text.length > 0 ? text : 'Nothing to preview yet...'}
        </p>
      </div>
    </>
  );
}
