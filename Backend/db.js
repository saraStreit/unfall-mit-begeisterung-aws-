const mongoose = require("mongoose");
const uri = "mongodb://root:root@localhost:27017/aws?authSource=admin&authMechanism=SCRAM-SHA-256";

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully!"))
    .catch((err) => console.log("Error connecting to MongoDB:", err));

module.exports = mongoose;
