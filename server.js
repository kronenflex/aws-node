const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('<h1> Expres conn html</h1>'))

app.listen(3000);
console.log("SDerver andando puerto 3000")