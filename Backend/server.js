const mongoose = require('mongoose');
const uri = 'mongodb://root:root@localhost:27017/?authMechanism=DEFAULT';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB successfully!'))
    .catch(err => console.log('Error connecting to MongoDB:', err));

//Todo create a schema for User with the following fields: first name, last name, email, phone number, adress



//Todo create schema for crash log: Car number, Car model, an array for car crash data 



// Todo create schema for euro crash log 


//Todo Rest API for user CRUD operations


