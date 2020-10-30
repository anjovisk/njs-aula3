const express = require('express');
const mathController = require('./controller/mathController');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.json());
mathController(app);

app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`)
});