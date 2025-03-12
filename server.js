const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const bodyParser = require('body-parser');  // helps in making data available in the req.body in the form of javascript object
const Person = require('./models//Person');
const menu = require('./models//menu');
const PORT = process.env.PORT || 3000;



app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Welcome to my restraunt, how can I help you?");   // res.send() is used to send the response to the client for clicking on certain urls
})


const MenuRoutes = require('./Routes/MenuRoute')
app.use('/menu', MenuRoutes)

// To fetch the persons data



const PersonRoutes = require('./Routes/PersonRoute');
app.use('/person',PersonRoutes);


app.listen(PORT, () => {
    console.log("Server is running on port 3000");
})            // 1st argument is the port number where we define the port number and 2nd argument is the callback function