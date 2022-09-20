const dotenv = require('dotenv');
var cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();



dotenv.config({ path: "./config.env" });
require('./db/conn');


app.use(express.json());
app.use(cors())
// we link the routers file to make our route easy
app.use(require("./router/auth"));

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!')
});


// Middleware


// app.get('/about', (req, res) => {
//   res.cookie("test", 'hamza')
//   res.send('about!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})