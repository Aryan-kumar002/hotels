const express = require('express');
const router = express.Router();

const person = require('./../models/person');


// POST route to add a person
router.post('/', async (req, res) => {
    try {
        const data = req.body;

        // Create a new person document
        const newperson = new person(data);

        // Save the new person to the database
        const response = await newperson.save();

        console.log('data saved');
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});


// GET route to get all persons
router.get('/', async (req, res) => {
    try {
        const data = await person.find();

        console.log('data fetched');
        res.status(200).json(data);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

router.put('/:id', async(req,res) =>{
    try{
const personId = req.params.id; /// extract the id from the url parameter
const updatePersonData = req.body; // update data for the person
const response = await person.findByIdAndUpdate(personId, updatedPersonData,{
new: true, // return the updated document
runValidators: true, // run mongoose validation
})
if(!response){
return res.status(404).json({error: ' person not found '});
}
console.log('data updated');
res.status(200).json(response);
    } 
    catch(err){
console.log(err);
res.status(500).json({ error: ' Internal server error'});
    }
})
router.delete('/:id', async(req,res)=>{
    try{
const personId= req.params.id; // extract the id from the url parameter

// assuming you have a person model
const response = await person.findByIdAndRemove(personid);
if(!response){
    return res.status(404).json({ error : 'Person not found'});
}
console.log('data delete');
res.status(200).json({message:' person deleted successsfully'});
    } catch(err){
console.log(err);
res.status(500).json({error: 'Internal server error'});
    }
});
module.exports = router;