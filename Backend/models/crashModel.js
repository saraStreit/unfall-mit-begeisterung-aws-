const mongoose = require("../db");

const crashDataSchema = new mongoose.Schema({
    carModel: String,
    carNumberplate: Number,
    carCountry: String,
    crashData: Array,
    gpsData: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});

const CrashData = mongoose.model("Crash", crashDataSchema, "CrashData");

module.exports = CrashData;
