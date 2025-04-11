const express = require('express');
const client = require('prom-client');

const app = express();
const register = new client.Registry();

client.collectDefaultMetrics({ register });

// Ruta de métricas
app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.get('/', (req, res) => {
  res.send('API básica funcionando');
});

app.listen(3000, () => {
  console.log('Servidor en puerto 3000');
});

app.get('/fail', (req, res) => {
  res.status(500).send('Error simulado');
});


