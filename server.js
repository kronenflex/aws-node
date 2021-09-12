const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('hello wordl con exporess'))

app.listen(3000);
console.log("SDerver andando puerto 3000")