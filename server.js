require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const publicPath = path.join(__dirname, 'build');

app.use(bodyParser.json()); // for parsing application/json
app.use(express.static(publicPath));

app.use('/api', require('./chat-api'));

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
