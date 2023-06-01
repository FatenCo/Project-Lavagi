const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const { stringify } = require("querystring");
const userSchema = mongoose.Schema({
firstName: String,
lastName: String,
email: {type: String, unique: true},
password: String,
phone: Number,
role: String,
});
userSchema.plugin(uniqueValidator);
const user = mongoose.model("User",userSchema)
module.exports = user;