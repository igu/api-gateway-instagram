const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://igu:igorigor@cluster0-ou3ye.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.use(require('./routes'));
app.listen(3001);
console.log('API DE CLONE DO INSTAGRAM OUVINDO NA PORTA 3001');