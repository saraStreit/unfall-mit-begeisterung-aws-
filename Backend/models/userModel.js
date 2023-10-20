const mongoose = require("../db");

const userDataSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: Number,
    address: String,
});

const UserData = mongoose.model("User", userDataSchema, "UserData");

module.exports = UserData;
