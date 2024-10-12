const express = require('express');
const app = express();
const port = 3000;

// Middleware для парсинга JSON
app.use(express.json());

let sum=0;

// Обработка POST-запроса
app.post('/message', (req, res) => {
    sum++;
    const message = req.body.message;
    const responseMessage = `Ваш 1: ${message}`+sum;
    res.json({ response: responseMessage });
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://ip:${port}`);
});
   