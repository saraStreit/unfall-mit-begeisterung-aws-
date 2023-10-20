const express = require('express');
const path = require('path');
const userRoutes = require("./routes/userRoutes");

const crashRoutes = require("./routes/crashRoutes");
const seedDatabase = require('./seeder/seedCrashData');

seedDatabase();

const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../Frontend/dist/Frontend')));

// Use the routes
app.use(userRoutes);
app.use(crashRoutes);


// Handle SPA fallback (assuming you have a single page application frontend)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/dist/Frontend/index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
