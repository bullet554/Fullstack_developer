const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>Добро пожаловать на мой сайт!</h1>
        <a href="/about">Переход на about</a>
        `)
});

app.get('/about', (req, res) => {
    res.send(`
        <h1>ABOUT!</h1>
        <a href="/">Переход на главную</a>
        `)
});

app.listen(3000);