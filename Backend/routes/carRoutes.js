const express = require("express");
const router = express.Router();
const CrashData = require("../models/carModel");
const { json } = require("body-parser");


// Check for numberplate
router.get("/api/crash/check/:country/:numberplate", async (req, res) => {
    try {
        const crashData = await CrashData.findOne({
            Schildnummer: req.params.numberplate,
            Kanton: req.params.country
        });
        if (!crashData) {
            return res.send(false);
        }
        return res.json(crashData) ;
    } catch (error) {
        return res.status(500).send(error);
    }
});




module.exports = router;
