var express = require('express');
var app = express();
var knex = require('./db/knex');

app.get('/', function(req, res) {
    res.status(200).send("Hey Portfolio");
});

app.listen(3000);
