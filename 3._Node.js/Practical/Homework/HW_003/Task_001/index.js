const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const counterFilePath = path.join(__dirname, 'counter.json');

function readCounter() {
    try {
        const data = fs.readFileSync(counterFilePath, 'utf-8');
        return JSON.parse(data);
    }
    catch (error) {
        console.error(`Ошибка чтения counter.json: `, error.message);
        return {};
    }
}

function writeCounter(counterData) {
    try {
        fs.writeFileSync(counterFilePath, JSON.stringify(counterData, null, 2), 'utf-8');
    }
    catch (error) {
        console.error(`Ошибка записи counter.json: `, error.message);
    }
}

let counterData = readCounter();

app.get('/', (req, res) => {
    counterData['/'] = (counterData['/'] || 0) + 1;
    writeCounter(counterData);

    res.send(`
        <h1>Добро пожаловать на мой сайт!</h1>
        <a href="/about">Переход на about</a>
        `);
})

app.get('/about', (req, res) => {
    counterData['/about'] = (counterData['/about'] || 0) + 1;
    writeCounter(counterData);

    res.send(`
        <h1>ABOUT!</h1>
        <a href="/">Переход на главную</a>
        `);
})

app.listen(3000, () => {
    console.log('Сервер запущен');
})