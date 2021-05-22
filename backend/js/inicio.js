"use strict";
var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var fs = require('fs');
var hostname = '127.0.0.1';
var port = 3008;
app.use(cors());
app.use(urlencodedParser);
app.use(jsonParser);
app.get('/notas', function (req, res) {
    var file = fs.readFileSync('notas.json');
    var notas = JSON.parse(file);
    res.send(notas);
});
app.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
