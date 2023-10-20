const express = require("express");
const router = express.Router();
const CrashData = require("../models/crashModel");

// CREATE
router.post("/api/crash-log", async (req, res) => {
    try {
        const crashData = new CrashData(req.body);
        await crashData.save();
        res.status(201).send(crashData);
    } catch (error) {
        res.status(400).send(error);
    }
});

// READ ALL
router.get("/api/crash-log", async (req, res) => {
    try {
        const crashData = await CrashData.find();
        res.send(crashData);
    } catch (error) {
        res.status(500).send(error);
    }
});

// READ ONE
router.get("/api/crash-log/:numberplate", async (req, res) => {
    try {
        const crashData = await CrashData.findOne({ carNumberplate: req.params.numberplate });
        if (!crashData) {
            return res.status(404).send();
        }
        res.send(crashData);
    } catch (error) {
        res.status(500).send(error);
    }
});

// UPDATE
router.patch("/api/crash-log/:id", async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["carModel", "carNumberplate", "crashData", "gpsData"];
    const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
        return res.status(400).send({ error: "Invalid updates!" });
    }

    try {
        const crashData = await CrashData.findById(req.params.id);
        if (!crashData) {
            return res.status(404).send();
        }
        updates.forEach((update) => (crashData[update] = req.body[update]));
        await crashData.save();
        res.send(crashData);
    } catch (error) {
        res.status(400).send(error);
    }
});

// DELETE
router.delete("/api/crash-log/:id", async (req, res) => {
    try {
        const crashData = await CrashData.findByIdAndDelete(req.params.id);
        if (!crashData) {
            return res.status(404).send();
        }
        res.send(crashData);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
