const mongoose = require("mongoose");

var Prograd = mongoose.model('Prograd',{
    name :  { type : String },
    id : { type : String},
    location : { type : String }
});

module.exports = { Prograd };