import React from 'react';

function Content({ theme }) {
    const containerStyle = {
        padding: '20px',
        margin: '20px 0',
        borderRadius: '8px',
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#333' : '#fff'
    }
    
    return (
        <div style={containerStyle}>
            <h3>Заголовок контента</h3>
            <p>
                Текуща тема: <strong>{theme === 'light' ? 'светлая' : 'темная'}</strong>
                <br />
                Этот блок меняет свой стиль в зависимости от выбранной темы.
            </p>
        </div>
    );
}

export default Content;