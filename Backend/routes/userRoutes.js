const express = require("express");
const router = express.Router();
const UserData = require("../models/userModel");

// 1. Create a new user
router.post("/api/user", async (req, res) => {
    try {
        const user = new UserData(req.body);
        await user.save();
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});

// 2. Get all users
router.get("/api/user", async (req, res) => {
    try {
        const users = await UserData.find({});
        res.send(users);
    } catch (err) {
        res.status(500).send(err);
    }
});

// 3. Get a user by ID
router.get("/api/user/:id", async (req, res) => {
    try {
        const user = await UserData.findById(req.params.id);
        if (!user) {
            return res.status(404).send({ error: "User not found" });
        }
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
