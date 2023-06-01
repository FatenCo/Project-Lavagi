const mongoose = require ('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { stringify } = require("querystring");
const reservationSchem = mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    telephone: Number,
    service: String,
    date: String,
    message: String,
    status: String
});
reservationSchem.plugin(uniqueValidator);
const reservation = mongoose.model("Reservation", reservationSchem);
module.exports = reservation ;