import { useState } from "react";

export const ExchangeRate = () => {
    const [rubAmount, setRubAmount] = useState('');
    const [targetCurrency, setTargetCurrency] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [conversionHistory, setConversionHistory] = useState([]);

    const API_KEY = 'dc7f33dce3d9916bbae82661';
    const URL_EXCHANGE_API = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/RUB`;

    const convert = async () => {
        if (!rubAmount || !targetCurrency) {
            setError('Заполните оба поля');
            return;
        }

        setLoading(true);
        setError('');
        setResult(null);

        try {
            const response = await fetch(URL_EXCHANGE_API);

            if (!response.ok) throw new Error('Ошибка сети');

            const data = await response.json();

            if (data.result === 'error') {
                throw new Error(data['error-type'] || 'Ошибка API');
            }

            const rate = data.conversion_rates[targetCurrency.toUpperCase()];
            if (!rate) throw new Error('Валюта не поддерживается');

            const converted = (parseFloat(rubAmount) * rate).toFixed(4);
            const resultStr = `${rubAmount} RUB = ${converted} ${targetCurrency.toUpperCase()}`;

            setResult(resultStr);
            setConversionHistory(prevHistory => [
                ...prevHistory,
                {
                    id: Date.now(),
                    from: `${rubAmount} RUB`,
                    to: `${converted} ${targetCurrency.toUpperCase()}`,
                    rate: rate.toFixed(6),
                    timestamp: new Date().toLocaleString()
                }
            ]);
        } catch (err) {
            setError(err.message);
        }

        setLoading(false);
    }

    return (
        <div>
            <h1>Конвертер</h1>

            {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

            <div>
                <label>
                    Количество рублей:
                    <input
                        type="number"
                        value={rubAmount}
                        onChange={(e) => setRubAmount(e.target.value)}
                        placeholder="Введите сумму"
                        style={{ marginLeft: '10px', padding: '5px' }}
                    />
                </label>
            </div>

            <div>
                <label>
                    Код валюты для конвертации:
                    <input
                        type="text"
                        value={targetCurrency}
                        onChange={(e) => setTargetCurrency(e.target.value.toUpperCase())}
                        placeholder="USD, EUR и др."
                        style={{ marginLeft: '10px', padding: '5px', marginRight: '10px' }}
                    />
                    <button
                        onClick={convert}
                        disabled={loading}
                        style={{
                            padding: '5px 10px',
                            backgroundColor: loading ? '#ccc' : '#007bff',
                            color: 'white',
                            border: 'none',
                            cursor: loading ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {loading ? 'Конвертируем...' : 'Конвертировать'}
                    </button>
                </label>
            </div>

            <div>
                <p>
                    {result || '0 RUB = 0 USD'}
                </p>
            </div>

            {conversionHistory.length > 0 && (
                <div style={{ marginTop: '20px' }}>
                    <h3>История конвертаций:</h3>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {conversionHistory.map((item) => (
                            <li key={item.id} style={{ marginBottom: '10px', padding: '10px', background: '#f0f8ff', borderRadius: '5px' }}>
                                <strong>{item.from}</strong> → <strong>{item.to}</strong><br />
                                <small>Курс: 1 RUB = {item.rate} {item.to.split(' ')[1]}</small><br />
                                <small style={{ color: '#666' }}>{item.timestamp}</small>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}