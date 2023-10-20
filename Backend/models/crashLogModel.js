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
    accidentLog: {
        parking: {
            personA: Boolean,
            personB: Boolean,
        },
        exitParking: {
            personA: Boolean,
            personB: Boolean,
        },
        parkingIn: {
            personA: Boolean,
            personB: Boolean,
        },
        parkingOut: {
            personA: Boolean,
            personB: Boolean,
        },
        driveInRoundabout: {
            personA: Boolean,
            personB: Boolean,
        },
        driveOutRoundabout: {
            personA: Boolean,
            personB: Boolean,
        },
        collideInSameDirectionSameLanesInBack: {
            personA: Boolean,
            personB: Boolean,
        },
        collideInSameDirectionOnDifrentLanes: {
            personA: Boolean,
            personB: Boolean,
        },
        changingLanes: {
            personA: Boolean,
            personB: Boolean,
        },
        overthatking: {
            personA: Boolean,
            personB: Boolean,
        },
        turningRight: {
            personA: Boolean,
            personB: Boolean,
        },
        turningLeft: {
            personA: Boolean,
            personB: Boolean,
        },
        driveBack: {
            personA: Boolean,
            personB: Boolean,
        },
        changeLanesToGhost: {
            personA: Boolean,
            personB: Boolean,
        },
        cameFromRight: {
            personA: Boolean,
            personB: Boolean,
        },
        ignoreRedLightOrStopSignEtc: {
            personA: Boolean,
            personB: Boolean,
        },
        howManyFields: {
            personA: Number,
            personB: Number,
        },
    },
});

const CrashLogData = mongoose.model("CrashLog", crashLogDataSchema, "CrashLogData");

module.exports = CrashLogData;
