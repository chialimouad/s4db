// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/routes');
const http = require('http');
const connectToDatabase = require('./config/dbsocket');

const initWebSocketServer = require('./routes/routebpm');

const server = http.createServer(app);
connectToDatabase();
initWebSocketServer(server);
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/12', userRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
module.exports = app;
