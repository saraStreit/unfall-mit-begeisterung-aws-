const mongoose = require("../db");
const CrashData = require("../models/crashLogModel");

const seedCrashLogData = [
    {
        personA: {
            firstName: "Jane",
            lastName: "Smith",
            email: "jane.smith@example.com",
            phoneNumber: "987654321",
            address: "456 Secondary St, Another City, Another Country",
            country: "France",
            pronuns: "She/Her",
            car: {
                brand: "BMW",
                numberPlate: "ABC 456",
                landOfRegistration: "France",
            },
            trailer: {
                numberPlate: "TR 789",
                landOfRegistration: "France",
            },
            insurance: {
                phoneNumber: 1122334455,
                policyNumber: 987654,
                insuranceNumber: 456789,
                insuranceLand: "France",
                numberGreenCard: 321098,
                insuranceCompany: "AXA",
            },
            driver: {
                firstName: "Jane",
                lastName: "Smith",
                email: "jane.smith@example.com",
                phoneNumber: "0987654321",
                address: "456 Secondary St, Another City, Another Country",
                land: "France",
                birthDate: new Date("1992-05-05"),
                licenseNumber: 1234567,
                licenseDate: new Date("2012-05-05"),
                licenseClass: "C",
            },
            visibleDamage: {
                front: false,
                frontLeft: true,
                frontRight: true,
                back: false,
                backLeft: true,
                backRight: true,
                left: true,
                right: true,
                top: false,
                bottom: false,
                other: false,
            },
        },
        accidentLog: {
            parking: {
                personA: true,
                personB: false,
            },
            exitParking: {
                personA: false,
                personB: true,
            },
            parkingIn: {
                personA: true,
                personB: false,
            },
            parkingOut: {
                personA: false,
                personB: true,
            },
            driveInRoundabout: {
                personA: false,
                personB: true,
            },
            driveOutRoundabout: {
                personA: true,
                personB: false,
            },
            collideInSameDirectionSameLanesInBack: {
                personA: false,
                personB: true,
            },
            collideInSameDirectionOnDifrentLanes: {
                personA: true,
                personB: false,
            },
            changingLanes: {
                personA: false,
                personB: true,
            },
            overthatking: {
                personA: true,
                personB: false,
            },
            turningRight: {
                personA: false,
                personB: true,
            },
            turningLeft: {
                personA: true,
                personB: false,
            },
            driveBack: {
                personA: false,
                personB: true,
            },
            changeLanesToGhost: {
                personA: true,
                personB: false,
            },
            cameFromRight: {
                personA: false,
                personB: true,
            },
            ignoreRedLightOrStopSignEtc: {
                personA: true,
                personB: false,
            },
            howManyFields: {
                personA: 3,
                personB: 2,
            },
        },
        personB: {
            firstName: "Jane",
            lastName: "Smith",
            email: "jane.smith@example.com",
            phoneNumber: "987654321",
            address: "456 Secondary St, Another City, Another Country",
            country: "France",
            pronuns: "She/Her",
            car: {
                brand: "BMW",
                numberPlate: "ABC 456",
                landOfRegistration: "France",
            },
            trailer: {
                numberPlate: "TR 789",
                landOfRegistration: "France",
            },
            insurance: {
                phoneNumber: 1122334455,
                policyNumber: 987654,
                insuranceNumber: 456789,
                insuranceLand: "France",
                numberGreenCard: 321098,
                insuranceCompany: "AXA",
            },
            driver: {
                firstName: "Jane",
                lastName: "Smith",
                email: "jane.smith@example.com",
                phoneNumber: "0987654321",
                address: "456 Secondary St, Another City, Another Country",
                land: "France",
                birthDate: new Date("1992-05-05"),
                licenseNumber: 1234567,
                licenseDate: new Date("2012-05-05"),
                licenseClass: "C",
            },
            visibleDamage: {
                front: false,
                frontLeft: true,
                frontRight: true,
                back: false,
                backLeft: true,
                backRight: true,
                left: true,
                right: true,
                top: false,
                bottom: false,
                other: false,
            },
        },
        accidentLog: {
            parking: {
                personA: true,
                personB: false,
            },
            exitParking: {
                personA: false,
                personB: true,
            },
            parkingIn: {
                personA: true,
                personB: false,
            },
            parkingOut: {
                personA: false,
                personB: true,
            },
            driveInRoundabout: {
                personA: false,
                personB: true,
            },
            driveOutRoundabout: {
                personA: true,
                personB: false,
            },
            collideInSameDirectionSameLanesInBack: {
                personA: false,
                personB: true,
            },
            collideInSameDirectionOnDifrentLanes: {
                personA: true,
                personB: false,
            },
            changingLanes: {
                personA: false,
                personB: true,
            },
            overthatking: {
                personA: true,
                personB: false,
            },
            turningRight: {
                personA: false,
                personB: true,
            },
            turningLeft: {
                personA: true,
                personB: false,
            },
            driveBack: {
                personA: false,
                personB: true,
            },
            changeLanesToGhost: {
                personA: true,
                personB: false,
            },
            cameFromRight: {
                personA: false,
                personB: true,
            },
            ignoreRedLightOrStopSignEtc: {
                personA: true,
                personB: false,
            },
            howManyFields: {
                personA: 3,
                personB: 2,
            },
        },
    },
    {
        personA: {
            firstName: "Jane",
            lastName: "Smith",
            email: "jane.smith@example.com",
            phoneNumber: "987654321",
            address: "456 Secondary St, Another City, Another Country",
            country: "France",
            pronuns: "She/Her",
            car: {
                brand: "BMW",
                numberPlate: "ABC 456",
                landOfRegistration: "France",
            },
            trailer: {
                numberPlate: "TR 789",
                landOfRegistration: "France",
            },
            insurance: {
                phoneNumber: 1122334455,
                policyNumber: 987654,
                insuranceNumber: 456789,
                insuranceLand: "France",
                numberGreenCard: 321098,
                insuranceCompany: "AXA",
            },
            driver: {
                firstName: "Jane",
                lastName: "Smith",
                email: "jane.smith@example.com",
                phoneNumber: "0987654321",
                address: "456 Secondary St, Another City, Another Country",
                land: "France",
                birthDate: new Date("1992-05-05"),
                licenseNumber: 1234567,
                licenseDate: new Date("2012-05-05"),
                licenseClass: "C",
            },
            visibleDamage: {
                front: false,
                frontLeft: true,
                frontRight: true,
                back: false,
                backLeft: true,
                backRight: true,
                left: true,
                right: true,
                top: false,
                bottom: false,
                other: false,
            },
        },
        accidentLog: {
            parking: {
                personA: true,
                personB: false,
            },
            exitParking: {
                personA: false,
                personB: true,
            },
            parkingIn: {
                personA: true,
                personB: false,
            },
            parkingOut: {
                personA: false,
                personB: true,
            },
            driveInRoundabout: {
                personA: false,
                personB: true,
            },
            driveOutRoundabout: {
                personA: true,
                personB: false,
            },
            collideInSameDirectionSameLanesInBack: {
                personA: false,
                personB: true,
            },
            collideInSameDirectionOnDifrentLanes: {
                personA: true,
                personB: false,
            },
            changingLanes: {
                personA: false,
                personB: true,
            },
            overthatking: {
                personA: true,
                personB: false,
            },
            turningRight: {
                personA: false,
                personB: true,
            },
            turningLeft: {
                personA: true,
                personB: false,
            },
            driveBack: {
                personA: false,
                personB: true,
            },
            changeLanesToGhost: {
                personA: true,
                personB: false,
            },
            cameFromRight: {
                personA: false,
                personB: true,
            },
            ignoreRedLightOrStopSignEtc: {
                personA: true,
                personB: false,
            },
            howManyFields: {
                personA: 3,
                personB: 2,
            },
        },
        personB: {
            firstName: "Jane",
            lastName: "Smith",
            email: "jane.smith@example.com",
            phoneNumber: "987654321",
            address: "456 Secondary St, Another City, Another Country",
            country: "France",
            pronuns: "She/Her",
            car: {
                brand: "BMW",
                numberPlate: "ABC 456",
                landOfRegistration: "France",
            },
            trailer: {
                numberPlate: "TR 789",
                landOfRegistration: "France",
            },
            insurance: {
                phoneNumber: 1122334455,
                policyNumber: 987654,
                insuranceNumber: 456789,
                insuranceLand: "France",
                numberGreenCard: 321098,
                insuranceCompany: "AXA",
            },
            driver: {
                firstName: "Jane",
                lastName: "Smith",
                email: "jane.smith@example.com",
                phoneNumber: "0987654321",
                address: "456 Secondary St, Another City, Another Country",
                land: "France",
                birthDate: new Date("1992-05-05"),
                licenseNumber: 1234567,
                licenseDate: new Date("2012-05-05"),
                licenseClass: "C",
            },
            visibleDamage: {
                front: false,
                frontLeft: true,
                frontRight: true,
                back: false,
                backLeft: true,
                backRight: true,
                left: true,
                right: true,
                top: false,
                bottom: false,
                other: false,
            },
        },
        accidentLog: {
            parking: {
                personA: true,
                personB: false,
            },
            exitParking: {
                personA: false,
                personB: true,
            },
            parkingIn: {
                personA: true,
                personB: false,
            },
            parkingOut: {
                personA: false,
                personB: true,
            },
            driveInRoundabout: {
                personA: false,
                personB: true,
            },
            driveOutRoundabout: {
                personA: true,
                personB: false,
            },
            collideInSameDirectionSameLanesInBack: {
                personA: false,
                personB: true,
            },
            collideInSameDirectionOnDifrentLanes: {
                personA: true,
                personB: false,
            },
            changingLanes: {
                personA: false,
                personB: true,
            },
            overthatking: {
                personA: true,
                personB: false,
            },
            turningRight: {
                personA: false,
                personB: true,
            },
            turningLeft: {
                personA: true,
                personB: false,
            },
            driveBack: {
                personA: false,
                personB: true,
            },
            changeLanesToGhost: {
                personA: true,
                personB: false,
            },
            cameFromRight: {
                personA: false,
                personB: true,
            },
            ignoreRedLightOrStopSignEtc: {
                personA: true,
                personB: false,
            },
            howManyFields: {
                personA: 3,
                personB: 2,
            },
        },
    },
    {
        personA: {
            firstName: "Jane",
            lastName: "Smith",
            email: "jane.smith@example.com",
            phoneNumber: "987654321",
            address: "456 Secondary St, Another City, Another Country",
            country: "France",
            pronuns: "She/Her",
            car: {
                brand: "BMW",
                numberPlate: "ABC 456",
                landOfRegistration: "France",
            },
            trailer: {
                numberPlate: "TR 789",
                landOfRegistration: "France",
            },
            insurance: {
                phoneNumber: 1122334455,
                policyNumber: 987654,
                insuranceNumber: 456789,
                insuranceLand: "France",
                numberGreenCard: 321098,
                insuranceCompany: "AXA",
            },
            driver: {
                firstName: "Jane",
                lastName: "Smith",
                email: "jane.smith@example.com",
                phoneNumber: "0987654321",
                address: "456 Secondary St, Another City, Another Country",
                land: "France",
                birthDate: new Date("1992-05-05"),
                licenseNumber: 1234567,
                licenseDate: new Date("2012-05-05"),
                licenseClass: "C",
            },
            visibleDamage: {
                front: false,
                frontLeft: true,
                frontRight: true,
                back: false,
                backLeft: true,
                backRight: true,
                left: true,
                right: true,
                top: false,
                bottom: false,
                other: false,
            },
        },
        accidentLog: {
            parking: {
                personA: true,
                personB: false,
            },
            exitParking: {
                personA: false,
                personB: true,
            },
            parkingIn: {
                personA: true,
                personB: false,
            },
            parkingOut: {
                personA: false,
                personB: true,
            },
            driveInRoundabout: {
                personA: false,
                personB: true,
            },
            driveOutRoundabout: {
                personA: true,
                personB: false,
            },
            collideInSameDirectionSameLanesInBack: {
                personA: false,
                personB: true,
            },
            collideInSameDirectionOnDifrentLanes: {
                personA: true,
                personB: false,
            },
            changingLanes: {
                personA: false,
                personB: true,
            },
            overthatking: {
                personA: true,
                personB: false,
            },
            turningRight: {
                personA: false,
                personB: true,
            },
            turningLeft: {
                personA: true,
                personB: false,
            },
            driveBack: {
                personA: false,
                personB: true,
            },
            changeLanesToGhost: {
                personA: true,
                personB: false,
            },
            cameFromRight: {
                personA: false,
                personB: true,
            },
            ignoreRedLightOrStopSignEtc: {
                personA: true,
                personB: false,
            },
            howManyFields: {
                personA: 3,
                personB: 2,
            },
        },
        personB: {
            firstName: "Jane",
            lastName: "Smith",
            email: "jane.smith@example.com",
            phoneNumber: "987654321",
            address: "456 Secondary St, Another City, Another Country",
            country: "France",
            pronuns: "She/Her",
            car: {
                brand: "BMW",
                numberPlate: "ABC 456",
                landOfRegistration: "France",
            },
            trailer: {
                numberPlate: "TR 789",
                landOfRegistration: "France",
            },
            insurance: {
                phoneNumber: 1122334455,
                policyNumber: 987654,
                insuranceNumber: 456789,
                insuranceLand: "France",
                numberGreenCard: 321098,
                insuranceCompany: "AXA",
            },
            driver: {
                firstName: "Jane",
                lastName: "Smith",
                email: "jane.smith@example.com",
                phoneNumber: "0987654321",
                address: "456 Secondary St, Another City, Another Country",
                land: "France",
                birthDate: new Date("1992-05-05"),
                licenseNumber: 1234567,
                licenseDate: new Date("2012-05-05"),
                licenseClass: "C",
            },
            visibleDamage: {
                front: false,
                frontLeft: true,
                frontRight: true,
                back: false,
                backLeft: true,
                backRight: true,
                left: true,
                right: true,
                top: false,
                bottom: false,
                other: false,
            },
        },
        accidentLog: {
            parking: {
                personA: true,
                personB: false,
            },
            exitParking: {
                personA: false,
                personB: true,
            },
            parkingIn: {
                personA: true,
                personB: false,
            },
            parkingOut: {
                personA: false,
                personB: true,
            },
            driveInRoundabout: {
                personA: false,
                personB: true,
            },
            driveOutRoundabout: {
                personA: true,
                personB: false,
            },
            collideInSameDirectionSameLanesInBack: {
                personA: false,
                personB: true,
            },
            collideInSameDirectionOnDifrentLanes: {
                personA: true,
                personB: false,
            },
            changingLanes: {
                personA: false,
                personB: true,
            },
            overthatking: {
                personA: true,
                personB: false,
            },
            turningRight: {
                personA: false,
                personB: true,
            },
            turningLeft: {
                personA: true,
                personB: false,
            },
            driveBack: {
                personA: false,
                personB: true,
            },
            changeLanesToGhost: {
                personA: true,
                personB: false,
            },
            cameFromRight: {
                personA: false,
                personB: true,
            },
            ignoreRedLightOrStopSignEtc: {
                personA: true,
                personB: false,
            },
            howManyFields: {
                personA: 3,
                personB: 2,
            },
        },
    },
    {
        personA: {
            firstName: "Jane",
            lastName: "Smith",
            email: "jane.smith@example.com",
            phoneNumber: "987654321",
            address: "456 Secondary St, Another City, Another Country",
            country: "France",
            pronuns: "She/Her",
            car: {
                brand: "BMW",
                numberPlate: "ABC 456",
                landOfRegistration: "France",
            },
            trailer: {
                numberPlate: "TR 789",
                landOfRegistration: "France",
            },
            insurance: {
                phoneNumber: 1122334455,
                policyNumber: 987654,
                insuranceNumber: 456789,
                insuranceLand: "France",
                numberGreenCard: 321098,
                insuranceCompany: "AXA",
            },
            driver: {
                firstName: "Jane",
                lastName: "Smith",
                email: "jane.smith@example.com",
                phoneNumber: "0987654321",
                address: "456 Secondary St, Another City, Another Country",
                land: "France",
                birthDate: new Date("1992-05-05"),
                licenseNumber: 1234567,
                licenseDate: new Date("2012-05-05"),
                licenseClass: "C",
            },
            visibleDamage: {
                front: false,
                frontLeft: true,
                frontRight: true,
                back: false,
                backLeft: true,
                backRight: true,
                left: true,
                right: true,
                top: false,
                bottom: false,
                other: false,
            },
        },
        accidentLog: {
            parking: {
                personA: true,
                personB: false,
            },
            exitParking: {
                personA: false,
                personB: true,
            },
            parkingIn: {
                personA: true,
                personB: false,
            },
            parkingOut: {
                personA: false,
                personB: true,
            },
            driveInRoundabout: {
                personA: false,
                personB: true,
            },
            driveOutRoundabout: {
                personA: true,
                personB: false,
            },
            collideInSameDirectionSameLanesInBack: {
                personA: false,
                personB: true,
            },
            collideInSameDirectionOnDifrentLanes: {
                personA: true,
                personB: false,
            },
            changingLanes: {
                personA: false,
                personB: true,
            },
            overthatking: {
                personA: true,
                personB: false,
            },
            turningRight: {
                personA: false,
                personB: true,
            },
            turningLeft: {
                personA: true,
                personB: false,
            },
            driveBack: {
                personA: false,
                personB: true,
            },
            changeLanesToGhost: {
                personA: true,
                personB: false,
            },
            cameFromRight: {
                personA: false,
                personB: true,
            },
            ignoreRedLightOrStopSignEtc: {
                personA: true,
                personB: false,
            },
            howManyFields: {
                personA: 3,
                personB: 2,
            },
        },
        personB: {
            firstName: "Jane",
            lastName: "Smith",
            email: "jane.smith@example.com",
            phoneNumber: "987654321",
            address: "456 Secondary St, Another City, Another Country",
            country: "France",
            pronuns: "She/Her",
            car: {
                brand: "BMW",
                numberPlate: "ABC 456",
                landOfRegistration: "France",
            },
            trailer: {
                numberPlate: "TR 789",
                landOfRegistration: "France",
            },
            insurance: {
                phoneNumber: 1122334455,
                policyNumber: 987654,
                insuranceNumber: 456789,
                insuranceLand: "France",
                numberGreenCard: 321098,
                insuranceCompany: "AXA",
            },
            driver: {
                firstName: "Jane",
                lastName: "Smith",
                email: "jane.smith@example.com",
                phoneNumber: "0987654321",
                address: "456 Secondary St, Another City, Another Country",
                land: "France",
                birthDate: new Date("1992-05-05"),
                licenseNumber: 1234567,
                licenseDate: new Date("2012-05-05"),
                licenseClass: "C",
            },
            visibleDamage: {
                front: false,
                frontLeft: true,
                frontRight: true,
                back: false,
                backLeft: true,
                backRight: true,
                left: true,
                right: true,
                top: false,
                bottom: false,
                other: false,
            },
        },
        accidentLog: {
            parking: {
                personA: true,
                personB: false,
            },
            exitParking: {
                personA: false,
                personB: true,
            },
            parkingIn: {
                personA: true,
                personB: false,
            },
            parkingOut: {
                personA: false,
                personB: true,
            },
            driveInRoundabout: {
                personA: false,
                personB: true,
            },
            driveOutRoundabout: {
                personA: true,
                personB: false,
            },
            collideInSameDirectionSameLanesInBack: {
                personA: false,
                personB: true,
            },
            collideInSameDirectionOnDifrentLanes: {
                personA: true,
                personB: false,
            },
            changingLanes: {
                personA: false,
                personB: true,
            },
            overthatking: {
                personA: true,
                personB: false,
            },
            turningRight: {
                personA: false,
                personB: true,
            },
            turningLeft: {
                personA: true,
                personB: false,
            },
            driveBack: {
                personA: false,
                personB: true,
            },
            changeLanesToGhost: {
                personA: true,
                personB: false,
            },
            cameFromRight: {
                personA: false,
                personB: true,
            },
            ignoreRedLightOrStopSignEtc: {
                personA: true,
                personB: false,
            },
            howManyFields: {
                personA: 3,
                personB: 2,
            },
        },
    },
    {
        personA: {
            firstName: "Jane",
            lastName: "Smith",
            email: "jane.smith@example.com",
            phoneNumber: "987654321",
            address: "456 Secondary St, Another City, Another Country",
            country: "France",
            pronuns: "She/Her",
            car: {
                brand: "BMW",
                numberPlate: "ABC 456",
                landOfRegistration: "France",
            },
            trailer: {
                numberPlate: "TR 789",
                landOfRegistration: "France",
            },
            insurance: {
                phoneNumber: 1122334455,
                policyNumber: 987654,
                insuranceNumber: 456789,
                insuranceLand: "France",
                numberGreenCard: 321098,
                insuranceCompany: "AXA",
            },
            driver: {
                firstName: "Jane",
                lastName: "Smith",
                email: "jane.smith@example.com",
                phoneNumber: "0987654321",
                address: "456 Secondary St, Another City, Another Country",
                land: "France",
                birthDate: new Date("1992-05-05"),
                licenseNumber: 1234567,
                licenseDate: new Date("2012-05-05"),
                licenseClass: "C",
            },
            visibleDamage: {
                front: false,
                frontLeft: true,
                frontRight: true,
                back: false,
                backLeft: true,
                backRight: true,
                left: true,
                right: true,
                top: false,
                bottom: false,
                other: false,
            },
        },
        accidentLog: {
            parking: {
                personA: true,
                personB: false,
            },
            exitParking: {
                personA: false,
                personB: true,
            },
            parkingIn: {
                personA: true,
                personB: false,
            },
            parkingOut: {
                personA: false,
                personB: true,
            },
            driveInRoundabout: {
                personA: false,
                personB: true,
            },
            driveOutRoundabout: {
                personA: true,
                personB: false,
            },
            collideInSameDirectionSameLanesInBack: {
                personA: false,
                personB: true,
            },
            collideInSameDirectionOnDifrentLanes: {
                personA: true,
                personB: false,
            },
            changingLanes: {
                personA: false,
                personB: true,
            },
            overthatking: {
                personA: true,
                personB: false,
            },
            turningRight: {
                personA: false,
                personB: true,
            },
            turningLeft: {
                personA: true,
                personB: false,
            },
            driveBack: {
                personA: false,
                personB: true,
            },
            changeLanesToGhost: {
                personA: true,
                personB: false,
            },
            cameFromRight: {
                personA: false,
                personB: true,
            },
            ignoreRedLightOrStopSignEtc: {
                personA: true,
                personB: false,
            },
            howManyFields: {
                personA: 3,
                personB: 2,
            },
        },
        personB: {
            firstName: "Jane",
            lastName: "Smith",
            email: "jane.smith@example.com",
            phoneNumber: "987654321",
            address: "456 Secondary St, Another City, Another Country",
            country: "France",
            pronuns: "She/Her",
            car: {
                brand: "BMW",
                numberPlate: "ABC 456",
                landOfRegistration: "France",
            },
            trailer: {
                numberPlate: "TR 789",
                landOfRegistration: "France",
            },
            insurance: {
                phoneNumber: 1122334455,
                policyNumber: 987654,
                insuranceNumber: 456789,
                insuranceLand: "France",
                numberGreenCard: 321098,
                insuranceCompany: "AXA",
            },
            driver: {
                firstName: "Jane",
                lastName: "Smith",
                email: "jane.smith@example.com",
                phoneNumber: "0987654321",
                address: "456 Secondary St, Another City, Another Country",
                land: "France",
                birthDate: new Date("1992-05-05"),
                licenseNumber: 1234567,
                licenseDate: new Date("2012-05-05"),
                licenseClass: "C",
            },
            visibleDamage: {
                front: false,
                frontLeft: true,
                frontRight: true,
                back: false,
                backLeft: true,
                backRight: true,
                left: true,
                right: true,
                top: false,
                bottom: false,
                other: false,
            },
        },
        accidentLog: {
            parking: {
                personA: true,
                personB: false,
            },
            exitParking: {
                personA: false,
                personB: true,
            },
            parkingIn: {
                personA: true,
                personB: false,
            },
            parkingOut: {
                personA: false,
                personB: true,
            },
            driveInRoundabout: {
                personA: false,
                personB: true,
            },
            driveOutRoundabout: {
                personA: true,
                personB: false,
            },
            collideInSameDirectionSameLanesInBack: {
                personA: false,
                personB: true,
            },
            collideInSameDirectionOnDifrentLanes: {
                personA: true,
                personB: false,
            },
            changingLanes: {
                personA: false,
                personB: true,
            },
            overthatking: {
                personA: true,
                personB: false,
            },
            turningRight: {
                personA: false,
                personB: true,
            },
            turningLeft: {
                personA: true,
                personB: false,
            },
            driveBack: {
                personA: false,
                personB: true,
            },
            changeLanesToGhost: {
                personA: true,
                personB: false,
            },
            cameFromRight: {
                personA: false,
                personB: true,
            },
            ignoreRedLightOrStopSignEtc: {
                personA: true,
                personB: false,
            },
            howManyFields: {
                personA: 3,
                personB: 2,
            },
        },
    },
    {
        personA: {
            firstName: "Jane",
            lastName: "Smith",
            email: "jane.smith@example.com",
            phoneNumber: "987654321",
            address: "456 Secondary St, Another City, Another Country",
            country: "France",
            pronuns: "She/Her",
            car: {
                brand: "BMW",
                numberPlate: "ABC 456",
                landOfRegistration: "France",
            },
            trailer: {
                numberPlate: "TR 789",
                landOfRegistration: "France",
            },
            insurance: {
                phoneNumber: 1122334455,
                policyNumber: 987654,
                insuranceNumber: 456789,
                insuranceLand: "France",
                numberGreenCard: 321098,
                insuranceCompany: "AXA",
            },
            driver: {
                firstName: "Jane",
                lastName: "Smith",
                email: "jane.smith@example.com",
                phoneNumber: "0987654321",
                address: "456 Secondary St, Another City, Another Country",
                land: "France",
                birthDate: new Date("1992-05-05"),
                licenseNumber: 1234567,
                licenseDate: new Date("2012-05-05"),
                licenseClass: "C",
            },
            visibleDamage: {
                front: false,
                frontLeft: true,
                frontRight: true,
                back: false,
                backLeft: true,
                backRight: true,
                left: true,
                right: true,
                top: false,
                bottom: false,
                other: false,
            },
        },
        accidentLog: {
            parking: {
                personA: true,
                personB: false,
            },
            exitParking: {
                personA: false,
                personB: true,
            },
            parkingIn: {
                personA: true,
                personB: false,
            },
            parkingOut: {
                personA: false,
                personB: true,
            },
            driveInRoundabout: {
                personA: false,
                personB: true,
            },
            driveOutRoundabout: {
                personA: true,
                personB: false,
            },
            collideInSameDirectionSameLanesInBack: {
                personA: false,
                personB: true,
            },
            collideInSameDirectionOnDifrentLanes: {
                personA: true,
                personB: false,
            },
            changingLanes: {
                personA: false,
                personB: true,
            },
            overthatking: {
                personA: true,
                personB: false,
            },
            turningRight: {
                personA: false,
                personB: true,
            },
            turningLeft: {
                personA: true,
                personB: false,
            },
            driveBack: {
                personA: false,
                personB: true,
            },
            changeLanesToGhost: {
                personA: true,
                personB: false,
            },
            cameFromRight: {
                personA: false,
                personB: true,
            },
            ignoreRedLightOrStopSignEtc: {
                personA: true,
                personB: false,
            },
            howManyFields: {
                personA: 3,
                personB: 2,
            },
        },
        personB: {
            firstName: "Jane",
            lastName: "Smith",
            email: "jane.smith@example.com",
            phoneNumber: "987654321",
            address: "456 Secondary St, Another City, Another Country",
            country: "France",
            pronuns: "She/Her",
            car: {
                brand: "BMW",
                numberPlate: "ABC 456",
                landOfRegistration: "France",
            },
            trailer: {
                numberPlate: "TR 789",
                landOfRegistration: "France",
            },
            insurance: {
                phoneNumber: 1122334455,
                policyNumber: 987654,
                insuranceNumber: 456789,
                insuranceLand: "France",
                numberGreenCard: 321098,
                insuranceCompany: "AXA",
            },
            driver: {
                firstName: "Jane",
                lastName: "Smith",
                email: "jane.smith@example.com",
                phoneNumber: "0987654321",
                address: "456 Secondary St, Another City, Another Country",
                land: "France",
                birthDate: new Date("1992-05-05"),
                licenseNumber: 1234567,
                licenseDate: new Date("2012-05-05"),
                licenseClass: "C",
            },
            visibleDamage: {
                front: false,
                frontLeft: true,
                frontRight: true,
                back: false,
                backLeft: true,
                backRight: true,
                left: true,
                right: true,
                top: false,
                bottom: false,
                other: false,
            },
        },
        accidentLog: {
            parking: {
                personA: true,
                personB: false,
            },
            exitParking: {
                personA: false,
                personB: true,
            },
            parkingIn: {
                personA: true,
                personB: false,
            },
            parkingOut: {
                personA: false,
                personB: true,
            },
            driveInRoundabout: {
                personA: false,
                personB: true,
            },
            driveOutRoundabout: {
                personA: true,
                personB: false,
            },
            collideInSameDirectionSameLanesInBack: {
                personA: false,
                personB: true,
            },
            collideInSameDirectionOnDifrentLanes: {
                personA: true,
                personB: false,
            },
            changingLanes: {
                personA: false,
                personB: true,
            },
            overthatking: {
                personA: true,
                personB: false,
            },
            turningRight: {
                personA: false,
                personB: true,
            },
            turningLeft: {
                personA: true,
                personB: false,
            },
            driveBack: {
                personA: false,
                personB: true,
            },
            changeLanesToGhost: {
                personA: true,
                personB: false,
            },
            cameFromRight: {
                personA: false,
                personB: true,
            },
            ignoreRedLightOrStopSignEtc: {
                personA: true,
                personB: false,
            },
            howManyFields: {
                personA: 3,
                personB: 2,
            },
        },
    },
    {
        personA: {
            firstName: "Jane",
            lastName: "Smith",
            email: "jane.smith@example.com",
            phoneNumber: "987654321",
            address: "456 Secondary St, Another City, Another Country",
            country: "France",
            pronuns: "She/Her",
            car: {
                brand: "BMW",
                numberPlate: "ABC 456",
                landOfRegistration: "France",
            },
            trailer: {
                numberPlate: "TR 789",
                landOfRegistration: "France",
            },
            insurance: {
                phoneNumber: 1122334455,
                policyNumber: 987654,
                insuranceNumber: 456789,
                insuranceLand: "France",
                numberGreenCard: 321098,
                insuranceCompany: "AXA",
            },
            driver: {
                firstName: "Jane",
                lastName: "Smith",
                email: "jane.smith@example.com",
                phoneNumber: "0987654321",
                address: "456 Secondary St, Another City, Another Country",
                land: "France",
                birthDate: new Date("1992-05-05"),
                licenseNumber: 1234567,
                licenseDate: new Date("2012-05-05"),
                licenseClass: "C",
            },
            visibleDamage: {
                front: false,
                frontLeft: true,
                frontRight: true,
                back: false,
                backLeft: true,
                backRight: true,
                left: true,
                right: true,
                top: false,
                bottom: false,
                other: false,
            },
        },
        accidentLog: {
            parking: {
                personA: true,
                personB: false,
            },
            exitParking: {
                personA: false,
                personB: true,
            },
            parkingIn: {
                personA: true,
                personB: false,
            },
            parkingOut: {
                personA: false,
                personB: true,
            },
            driveInRoundabout: {
                personA: false,
                personB: true,
            },
            driveOutRoundabout: {
                personA: true,
                personB: false,
            },
            collideInSameDirectionSameLanesInBack: {
                personA: false,
                personB: true,
            },
            collideInSameDirectionOnDifrentLanes: {
                personA: true,
                personB: false,
            },
            changingLanes: {
                personA: false,
                personB: true,
            },
            overthatking: {
                personA: true,
                personB: false,
            },
            turningRight: {
                personA: false,
                personB: true,
            },
            turningLeft: {
                personA: true,
                personB: false,
            },
            driveBack: {
                personA: false,
                personB: true,
            },
            changeLanesToGhost: {
                personA: true,
                personB: false,
            },
            cameFromRight: {
                personA: false,
                personB: true,
            },
            ignoreRedLightOrStopSignEtc: {
                personA: true,
                personB: false,
            },
            howManyFields: {
                personA: 3,
                personB: 2,
            },
        },
        personB: {
            firstName: "Jane",
            lastName: "Smith",
            email: "jane.smith@example.com",
            phoneNumber: "987654321",
            address: "456 Secondary St, Another City, Another Country",
            country: "France",
            pronuns: "She/Her",
            car: {
                brand: "BMW",
                numberPlate: "ABC 456",
                landOfRegistration: "France",
            },
            trailer: {
                numberPlate: "TR 789",
                landOfRegistration: "France",
            },
            insurance: {
                phoneNumber: 1122334455,
                policyNumber: 987654,
                insuranceNumber: 456789,
                insuranceLand: "France",
                numberGreenCard: 321098,
                insuranceCompany: "AXA",
            },
            driver: {
                firstName: "Jane",
                lastName: "Smith",
                email: "jane.smith@example.com",
                phoneNumber: "0987654321",
                address: "456 Secondary St, Another City, Another Country",
                land: "France",
                birthDate: new Date("1992-05-05"),
                licenseNumber: 1234567,
                licenseDate: new Date("2012-05-05"),
                licenseClass: "C",
            },
            visibleDamage: {
                front: false,
                frontLeft: true,
                frontRight: true,
                back: false,
                backLeft: true,
                backRight: true,
                left: true,
                right: true,
                top: false,
                bottom: false,
                other: false,
            },
        },
        accidentLog: {
            parking: {
                personA: true,
                personB: false,
            },
            exitParking: {
                personA: false,
                personB: true,
            },
            parkingIn: {
                personA: true,
                personB: false,
            },
            parkingOut: {
                personA: false,
                personB: true,
            },
            driveInRoundabout: {
                personA: false,
                personB: true,
            },
            driveOutRoundabout: {
                personA: true,
                personB: false,
            },
            collideInSameDirectionSameLanesInBack: {
                personA: false,
                personB: true,
            },
            collideInSameDirectionOnDifrentLanes: {
                personA: true,
                personB: false,
            },
            changingLanes: {
                personA: false,
                personB: true,
            },
            overthatking: {
                personA: true,
                personB: false,
            },
            turningRight: {
                personA: false,
                personB: true,
            },
            turningLeft: {
                personA: true,
                personB: false,
            },
            driveBack: {
                personA: false,
                personB: true,
            },
            changeLanesToGhost: {
                personA: true,
                personB: false,
            },
            cameFromRight: {
                personA: false,
                personB: true,
            },
            ignoreRedLightOrStopSignEtc: {
                personA: true,
                personB: false,
            },
            howManyFields: {
                personA: 3,
                personB: 2,
            },
        },
    },
    
];

async function seedCrashLogDatabase() {
    try {
        await mongoose.connect(
            "mongodb://root:root@localhost:27017/aws?authSource=admin&authMechanism=SCRAM-SHA-256",
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        console.log("Connected to MongoDB...");

        await CrashData.deleteMany({});
        console.log("Cleared CrashData collection...");

        await CrashData.insertMany(seedCrashLogData);
        console.log("Seeded CrashData collection with sample data...");
    } catch (error) {
        console.error("Error seeding database:", error);
    }
}
module.exports = seedCrashLogDatabase;
