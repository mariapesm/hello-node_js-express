var express = require('express');
var app = express();

app.get('/', function (req, res) {
 res.sendFile( __dirname + "index1.html" );
});

app.listen(process.env.PORT || 3000);
