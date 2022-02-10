const express = require('express');
const app = express();
const home = require('./src/routes/index');
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended: true}));


app.use(express.json());
app.get('/', home);


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000...');
});

module.exports = app;

