// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/routes');
const patientDataRoutes = require('./routes/routebpm');

const PORT = process.env.PORT ||3500;


app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/data', patientDataRoutes);
app.use('/12', userRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
module.exports = app;
