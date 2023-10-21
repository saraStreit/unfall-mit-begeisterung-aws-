const mongoose = require('../db');
const userData = require('../models/userModel');

const seedUserData = [
    {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        phoneNumber: "987654321",
        address: "456 Elm St, City, Country",
        land: "France"
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        phoneNumber: "987654321",
        address: "456 Elm St, City, Country",
        land: "France"
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        phoneNumber: "987654321",
        address: "456 Elm St, City, Country",
        land: "France"
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        phoneNumber: "987654321",
        address: "456 Elm St, City, Country",
        land: "France"
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        phoneNumber: "987654321",
        address: "456 Elm St, City, Country",
        land: "France"
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        phoneNumber: "987654321",
        address: "456 Elm St, City, Country",
        land: "France"
    },
];

async function seedUserDatabase() {
    try {
        await mongoose.connect('mongodb://root:root@localhost:27017/aws?authSource=admin&authMechanism=SCRAM-SHA-256', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB...');

        await userData.deleteMany({});
        console.log('Cleared CrashData collection...');

        await userData.insertMany(seedUserData);
        console.log('Seeded CrashData collection with sample data...');

    } catch (error) {
        console.error('Error seeding database:', error);
    }
}
module.exports = seedUserDatabase;

