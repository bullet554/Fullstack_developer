const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=UTF-8' });
    res.end('<h1>Заголовок 1</h1>');
    console.log('Запрос получен');
});

const port = '3000';

server.listen(port);
