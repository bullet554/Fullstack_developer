import React, { useState } from "react";

function TextDisplayForm({ theme }) {
    const containerStyle = {
        padding: '20px',
        margin: '20px 0',
        borderRadius: '8px',
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#333' : '#fff'
    }

    const resultTextStyle = {
        fontSize: '1.2em',
        color: theme === 'light' ? '#0d7592ff' : '#248ca9ff'
    };

    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setText(e.target[0].value);
    }

    return (
        <div style={containerStyle}>
            <form onSubmit={handleSubmit}>
                <label htmlFor='TextField'>Введите текст: </label>
                <input
                    style={{ 
                        width: '100%', 
                        textAlign: 'center',
                        backgroundColor: theme === 'light' ? '#fff' : '#7f7f7fff',
                        marginTop: '10px', 
                        marginBottom: '10px'
                    }}
                    id='TextField'>
                </input>
                <button>Отобразить текст</button>
            </form>
            <h3 style={resultTextStyle}>{text}</h3>
        </div>
    );
}

export default TextDisplayForm;