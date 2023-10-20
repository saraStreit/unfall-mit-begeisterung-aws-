const mongoose = require('../db');
const userData = require('../models/userModel');

const seedUserData = [
    {
        carModel: 'Audi A4',
        carNumberplate: 'XYZ 123',
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
        carNumberplate: 'XYZ 123',
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
        carNumberplate: 'XYZ 123',
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
        carNumberplate: 'XYZ 123',
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
        carNumberplate: 'XYZ 123',
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
        carNumberplate: 'XYZ 123',
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
        carNumberplate: 'ABC 789',
        crashData: [
            { impactForce: 4.7, location: 'front-right' }
        ],
        gpsData: {
            type: 'Point',
            coordinates: [10.4924, 45.8902]
        }
    }
];

async function seedDatabase() {
    try {
        await mongoose.connect('mongodb://root:root@localhost:27017/aws?authSource=admin&authMechanism=SCRAM-SHA-256', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB...');

        await userDataData.deleteMany({});
        console.log('Cleared CrashData collection...');

        await userData.insertMany(seedUserData);
        console.log('Seeded CrashData collection with sample data...');

        mongoose.connection.close();
        console.log('Closed connection to MongoDB...');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}
module.exports = seedDatabase;

