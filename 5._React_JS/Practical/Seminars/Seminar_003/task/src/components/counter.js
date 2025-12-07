import { useState } from "react";


function Counter({theme}) {
    const [count, setCount] = useState(0);

    const upCount = () => {
        setCount(count + 1);
    }

    const downCount = () => {
        setCount(count - 1);
    }

    const containerStyle = {
        padding: '20px',
        margin: '20px 0',
        borderRadius: '8px',
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#333' : '#fff'
    }

    return (
        <div style={containerStyle}>
            <p>Count: {count}</p>
            <button onClick={upCount}>++</button>
            <button
                onClick={downCount}
                disabled={count === 0}
            >
                --
            </button>
            {count === 0 && (
                <p style={{ color: 'red', fontSize: '0.9em' }}>
                    Значение меньше нуля недопустимо!
                </p>
            )}
        </div>
    );
}

export default Counter;