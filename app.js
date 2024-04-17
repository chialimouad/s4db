// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/routes');
const http = require('http');

const app = express();

const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/12', userRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
module.exports = app;
