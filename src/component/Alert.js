import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    if (!props.alert) return null;

    const type = props.alert.type || 'info';

    const darkAlertColors = {
        success: { background: '#0f5132', color: 'white' },
        danger: { background: '#842029', color: 'white' },
        warning: { background: '#664d03', color: 'white' },
        info: { background: '#055160', color: 'white' },
        primary: { background: '#084298', color: 'white' }
    };

    const useBootstrapClass = props.mode === 'light';
    const inlineStyle = useBootstrapClass ? {} : (darkAlertColors[type] || { background: '#333', color: 'white' });

    return (
        <div
            className={`alert ${useBootstrapClass ? `alert-${type}` : ''} alert-dismissible fade show`}
            role="alert"
            style={useBootstrapClass ? {} : { backgroundColor: inlineStyle.background, color: inlineStyle.color }}
        >
            <strong>{capitalize(type)}</strong> : {props.alert.msg}
            <button
                type="button"
                className={`btn-close ${useBootstrapClass ? '' : 'btn-close-white'}`}
                data-bs-dismiss="alert"
                aria-label="Close"
            ></button>
        </div>
    )
}
