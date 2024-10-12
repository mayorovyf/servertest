const express = require('express');
const app = express();
const port = 3000;

// Middleware для парсинга JSON
app.use(express.json());

let sum = 0;

// Обработка POST-запроса
app.post('/message', (req, res) => {
    sum++;
    const message = req.body.message;
    const responseMessage = `Ваше сообщение: ${message}. Номер запроса: ${sum}`;

    res.json({ response: responseMessage });
});

// Обработка запроса для остановки сервера
app.post('/shutdown', (req, res) => {
    res.json({ message: "Сервер остановлен." });
    server.close(() => {
        console.log("Сервер был остановлен.");
    });
});

// Запуск сервера
const server = app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
