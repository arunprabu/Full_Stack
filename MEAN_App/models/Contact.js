var mongoose = require("./mongo.js");
var Schema = mongoose.Schema;

var Contact = new Schema({
    name : String,
    phone : String
});

module.exports = mongoose.model('Contact', Contact);