const express = require('express');
const router = express.Router();

const menu = require('../models/menu');

router.get('/', async (req,res) => {
    try{
        const data = await menu.find();
        console.log("data fetched")
        res.status(200).json(data);
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }

})

router.get('/:taste', async (req,res) => {
    try{
        const taste = req.params.taste;
        const data = await menu.find({taste: taste});
        console.log("data fetched")
        res.status(200).json(data);
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
})

router.post('/', async (req,res) => {  
    try{
        const data = req.body;
        const newMenu = new menu(data);

        const response = await newMenu.save();
        console.log("data is saved");
        res.status(200).json(response);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
})

module.exports = router;