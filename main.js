const express = require('express');
const app = express();
const port = 3000;

// Middleware для парсинга JSON
app.use(express.json());

// Обработка POST-запроса
app.post('/message', (req, res) => {
    const message = req.body.message;
    const responseMessage = `Ваш ответ: ${message}`;
    res.json({ response: responseMessage });
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
   