const express = require('express');
const path = require('path');
const userRoutes = require("./routes/userRoutes");

const crashRoutes = require("./routes/crashRoutes");
const crashLogRoutes = require("./routes/crashLogRoutes");
const carRoutes = require("./routes/carRoutes");
const seedCrashDatabase = require('./seeder/seedCrashData');

const seedCrashLogDatabase = require('./seeder/seedCrashLogData');

const seedUserDatabase = require('./seeder/seedUserData');

seedCrashDatabase();
seedUserDatabase();
seedCrashLogDatabase();

const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../Frontend/dist/Frontend')));



// Use the routes
app.use(userRoutes);
app.use(crashRoutes);
app.use(crashLogRoutes);
app.use(carRoutes);


// Handle SPA fallback (assuming you have a single page application frontend)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/dist/Frontend/index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
