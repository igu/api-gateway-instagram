const express = require('express');
const path = require('path');
const app = express();

app.use('/files', express.static(path.resolve(__dirname, 'resized')));
app.listen(3002);
console.log('API DE FILES OUVINDO NA PORTA 3002');
