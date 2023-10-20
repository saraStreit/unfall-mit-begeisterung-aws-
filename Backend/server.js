const mongoose = require("mongoose");
const uri = "mongodb://root:root@localhost:27017/?authMechanism=DEFAULT";
const express = require("express");
const path = require("path");
const PORT = 3000;
const app = express();

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully!"))
    .catch((err) => console.log("Error connecting to MongoDB:", err));

app.use(express.static(path.join(__dirname, "template", "index.html")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Todo create a schema for User with the following fields: first name, last name, email, phone number, adress

//Todo create schema for crash log: Car number, Car model, an array for car crash data

// Todo create schema for euro crash log

//Todo Rest API for user CRUD operations

app.get("/", (req, res) => { 
    res.send("Hello world");
});

app.get("/api/crash-log", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
