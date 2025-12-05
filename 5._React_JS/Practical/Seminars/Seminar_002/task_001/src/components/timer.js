import { useState, useEffect } from 'react';

function Timer() {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);

    return (
        <div>
            <h1>Таймер</h1>
            <p>Прошло секунд: {timer}</p>
        </div>
    );
}

export default Timer;
