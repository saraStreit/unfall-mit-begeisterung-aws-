const express = require("express");
const path = require("path");
const userRoutes = require("./routes/userRoutes");
const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, "template", "index.html")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the routes
app.use(userRoutes);

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
