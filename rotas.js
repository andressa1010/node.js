const express = require('express');
const app = express();

app.get('/', (req, res) => {
 res.send('Home page');
});

app.get('/sobre', (req, res) => {
 res.send('About page');
});

app.use((req, res) => {
 res.status(404).send('Page not found');
});

app.listen(3000, () => {
 console.log('Servidor em execução em http://localhost:3000/');
});