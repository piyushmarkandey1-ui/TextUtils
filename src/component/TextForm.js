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
    padding: '28px',
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

  const btnStyle = (primary = true) => ({
    backgroundColor: primary ? t.accent : 'transparent',
    color: primary ? '#fff' : t.subtext,
    border: `1.5px solid ${primary ? t.accent : t.border}`,
    borderRadius: '8px',
    padding: '8px 18px',
    fontWeight: '600',
    fontSize: '0.85rem',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    boxShadow: primary ? `0 2px 10px ${t.accent}44` : 'none',
  });

  const statCardStyle = {
    backgroundColor: t.surface,
    color: t.text,
    borderRadius: '12px',
    padding: '20px 24px',
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
          <label htmlFor="myTextArea" style={labelStyle}>
            ✏️ {props.heading}
          </label>
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

        <div className="d-flex flex-wrap gap-2 mt-3">
          <button style={btnStyle(true)} onClick={handleUpcase}>⬆ Uppercase</button>
          <button style={btnStyle(true)} onClick={handleLowcase}>⬇ Lowercase</button>
          <button style={btnStyle(true)} onClick={handleReverse}>🔄 Reverse</button>
          <button style={btnStyle(false)} onClick={handleCopy}>📋 Copy</button>
          <button style={btnStyle(false)} onClick={handleClear}>🗑 Clear</button>
        </div>
      </div>

      <div className="container mb-4" style={statCardStyle}>
        <h5 style={{ color: t.accent, fontWeight: '700', marginBottom: '16px' }}>📊 Text Summary</h5>
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

        <h6 style={{ color: t.subtext, fontWeight: '600', marginBottom: '8px' }}>👁 Preview</h6>
        <p style={{ color: t.text, lineHeight: '1.7', fontStyle: text.length === 0 ? 'italic' : 'normal', opacity: text.length === 0 ? 0.5 : 1 }}>
          {text.length > 0 ? text : 'Nothing to preview yet...'}
        </p>
      </div>
    </>
  );
}
