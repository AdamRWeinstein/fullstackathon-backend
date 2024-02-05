const mongoose = require("mongoose")
const Schema = mongoose.Schema

const RideSchema = new Schema({
    name: String,
    image: String,
    description: String,
    thrill: String,
    height: String,
    pass: String
}, {timestamps: true});

module.exports = mongoose.model("Ride", RideSchema);