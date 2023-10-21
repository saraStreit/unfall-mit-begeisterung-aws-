const mongoose = require("../db");

const userDataSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    address: String,
    country: String
});

const UserData = mongoose.model("User", userDataSchema, "UserData");

module.exports = UserData;
