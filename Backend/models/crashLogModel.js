const mongoose = require("../db");

const crashLogDataSchema = new mongoose.Schema({
    personA: {
        firstName: String,
        lastName: String,
        email: String,
        phoneNumber: Number,
        address: String,
        land: String,
        pronuns: String,
        car: {
            brand: String,
            numberPlate: String,
            landOfRegistration: String,
        },
        trailer: {
            numberPlate: String,
            landOfRegistration: String,
        },
        insurance: {
            phoneNumber: Number,
            policyNumber: Number,
            insuranceNumber: Number,
            insuranceLand: String,
            numberGreenCard: Number,
            insuranceCompany: String,
        },
        driver: {
            firstName: String,
            lastName: String,
            email: String,
            phoneNumber: Number,
            address: String,
            land: String,
            birthDate: Date,
            licenseNumber: Number,
            licenseDate: Date,
            licenseClass: String,
        },
        visibleDamage: {
            front: Boolean,
            frontLeft: Boolean,
            frontRight: Boolean,
            back: Boolean,
            backLeft: Boolean,
            backRight: Boolean,
            left: Boolean,
            right: Boolean,
            top: Boolean,
            bottom: Boolean,
            other: Boolean,
        },
        

    },

    personB: {
        firstName: String,
        lastName: String,
        email: String,
        phoneNumber: Number,
        address: String,
        land: String,
    },

    carNumberplate: String,
    crashData: Array,
    gpsData: {
        type: {
            type: String,
            enum: ["Point"],
            required: true,
        },
        coordinates: {
            type: [Number],
            required: true,
        },
    },
});

const CrashData = mongoose.model("Crash", crashDataSchema, "CrashData");

module.exports = CrashData;
