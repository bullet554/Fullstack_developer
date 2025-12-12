import { useState } from "react";
import Button from 'react-bootstrap/Button';

function DegreesConverter() {

    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0);

    const handleSubmitCelsius = (e) => {
        e.preventDefault();
        const celsius = e.target[0].value;
        setCelsius(celsius * 1.8 + 32);
    }

    const handleSubmitFahrenheit = (e) => {
        e.preventDefault();
        const fahrenheit = e.target[0].value;
        setFahrenheit((fahrenheit - 32) * (5 / 9));
    }

    return (
        <>
            <form className="formCelsius" onSubmit={handleSubmitCelsius}>
                <label>Введите ℃: </label>
                <input className="inputCelsius"></input>
                <Button variant="primary" type="submit" size="sm">
                    Конвертировать
                </Button>
                <p className="resultCelsius">Результат: {celsius}℉</p>
            </form>

            <form className="formFahrenheit" onSubmit={handleSubmitFahrenheit}>
                <label>Введите ℉: </label>
                <input className="inputFahrenheit"></input>
                <Button variant="primary" type="submit" size="sm">
                    Конвертировать
                </Button>
                <p className="resultFahrenheit">Результат: {fahrenheit}℃</p>
            </form>
        </>
    );
}

export default DegreesConverter;