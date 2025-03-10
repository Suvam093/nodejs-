const express = require('express');
const router = express.Router();
const Person = require('../models/Person');


router.post('/', async (req,res) =>{

    try{
        const data = req.body;    //assuming the request body contains the persons data

        //Creating new person object using mongoose model
        const newPerson = new Person(data);

        const response = await newPerson.save();
        console.log("data is saved");
        res.status(200).json(response);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
})

router.get('/', async (req,res) => {
    try{
        const data = await Person.find();
        console.log("data fetched")
        res.status(200).json(data);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
})


router.get('/:worktype', async (req, res) =>{
    try {
        const worktype = req.params.worktype;
        if(worktype == 'chef' || worktype == 'manager' || worktype == 'waiter'){
            const data = await Person.find({work: worktype});
            console.log("data fetched")
            res.status(200).json(data);
        }
        else{
            res.status(404).json({error: "Invalid work type"});
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
})


router.put('/:id', async (req, res) => {
    try{
        const Personid = req.params.id;          //return the updated document
        const updatedPersondata = req.body;      //run the mongoose validation

        const response = await Person.findByIdAndUpdate(Personid, updatedPersondata,{
            new: true,
            runValidators: true
        })
        if(!response){
            res.status(404).json({error: "Person not found"});
        }
        console.log("data is updated");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: "Internal Server Error"});
    }
})


router.delete('/:id', async (req, res) => {
    const Personid = req.params.id;

    try{
        const response = await Person.findByIdAndDelete(Personid);
        if(!response){
            res.status(404).json({error: "Person not found"});
        }
        console.log("data is deleted");
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});
    }
})
module.exports = router;
