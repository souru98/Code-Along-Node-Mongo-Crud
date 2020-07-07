const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

var mongoose = require('./config/db.js')

var progradController = require("./controller/progradController.js")

var app = express();

app.use(bodyParser.json());
app.use(cors("*"));

app.listen(6000, () => {
    console.log("Server Started");
});

app.use('/', progradController);

