const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('¡Hola Mundo desde Docker!-'));
app.get('/health', (req, res) => res.send({ status: 'ok' }));

app.listen(PORT, () => console.log(`App corriendo en puerto ${PORT}`));

module.exports = app;

