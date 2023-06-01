const mongoose = require("mongoose");
const specialtiesSchema = mongoose.Schema({
    Name: String,
    Price: Number,
    idUser: String,
});
const specialties = mongoose.model("Specialties", specialtiesSchema);
module.exports = specialties;