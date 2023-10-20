
const userRoutes = require("./routes/userRoutes");
const crashRoutes = require("./routes/crashRoutes");
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Bedienen Sie statische Dateien aus dem Angular dist-Verzeichnis
app.use(express.static(path.join(__dirname, '../Frontend/dist/Frontend')));

// Leiten Sie alle Anfragen an die Angular-App weiter
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/dist/Frontend/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the routes
app.use(userRoutes);
app.use(crashRoutes);



