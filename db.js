const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURL = 'mongodb://localhost:27017/restaurant';
const mongoURL = process.env.DB_URL;

mongoose.connect(mongoURL)

const db = mongoose.connection;

db.on('connected', () => {
    console.log("Connected to MongoDB");
})

db.on('error', (error) => {
    console.log("Error connecting to MongoDB", error);
})

db.on('disconnected', () => {
    console.log("Disconnected from MongoDB");
})

module.exports = db; 