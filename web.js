var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('hello, you see it because it works a request api');
});

app.listen(process.env.PORT || 3000);
