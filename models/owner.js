const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { stringify } = require("querystring");
const ownerSchema = mongoose.Schema({
firstName: String,
lastName: String,
email: {type: String, unique: true},
phone: Number,
adress: String,
specialties: String,
experiences: Number,
img: String
});
const owner = mongoose.model("Owner", ownerSchema);
module.exports = owner;