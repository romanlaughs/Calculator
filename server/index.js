
const express = require("express");
const path = require("path");
const port = 3000;
const compression = require('compression')
const axios = require("axios");

const app = express();
app.use(compression());



app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/test', (req, res) => {
  res.send("TEST SUCCESS!!!")
} )



app.listen(port);
console.log(`Listening at http://localhost:${port}`);