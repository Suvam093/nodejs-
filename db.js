const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURL = process.env.MONGODB_LOCAL_URL;
const mongoURL = process.env.DB_URL;

mongoose.connect(process.env.DB_URL, {
    tls: true,
    tlsAllowInvalidCertificates: true, // Ignore SSL certificate issues
    serverSelectionTimeoutMS: 5000 // Prevents infinite retry loops
  })

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