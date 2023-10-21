const mongoose = require('../db');
const CrashData = require('../models/crashModel');

const seedCrashData = [
    {
        carModel: 'Audi A4',
        carNumberplate: 123,
        carCountry: 'DE',
        crashData: [
            { impactForce: 5.5, location: 'front-left' },
            { impactForce: 3.2, location: 'rear-right' }
        ],
        gpsData: {
            type: 'Point',
            coordinates: [12.4924, 41.8902]
        }
    },
    {
        carModel: 'Audi A4',
        carNumberplate: 123,
        carCountry: 'DE',
        crashData: [
            { impactForce: 5.5, location: 'front-left' },
            { impactForce: 3.2, location: 'rear-right' }
        ],
        gpsData: {
            type: 'Point',
            coordinates: [12.4924, 41.8902]
        }
    },
    {
        carModel: 'BMW 3 Series',
        carNumberplate: 789,
        carCountry: 'DE',
        crashData: [
            { impactForce: 4.7, location: 'front-right' }
        ],
        gpsData: {
            type: 'Point',
            coordinates: [10.4924, 45.8902]
        }
    }
];

async function seedCrashDatabase() {
    try {
        await mongoose.connect('mongodb://root:root@localhost:27017/aws?authSource=admin&authMechanism=SCRAM-SHA-256', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB...');

        await CrashData.deleteMany({});
        console.log('Cleared CrashData collection...');

        await CrashData.insertMany(seedCrashData);
        console.log('Seeded CrashData collection with sample data...');

    
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}
module.exports = seedCrashDatabase;

