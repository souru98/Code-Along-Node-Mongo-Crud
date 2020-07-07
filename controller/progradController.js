const express = require("express");
const router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;

var { Prograd } = require("../models/ProGrad");

router.get('/', (req,res) =>{
    Prograd.find((err,data) =>{
        if (!err) 
            res.send(data); 
        else 
            console.log('Error in fetching list user');
    })
});


router.get('/:id', (req , res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send("No Record Found");
    Prograd.findById(req.params.id,(err , data) =>{
        if (!err) 
            res.send(data); 
        else 
            console.log('Error in find user');
    })
});


router.post('/', ( req, res) => {
    let usr = new Prograd({
        name : req.body.name,
        id : req.body.id,
        location : req.body.location
    });
    usr.save((err, data) => {
        if (!err) 
            res.send(data); 
        else 
            console.log('Error in User Update :'); 
    });
});


router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send("No Record Found");
    Prograd.findByIdAndUpdate(req.params.id, req.body  , { new : true }, (err, doc) => {
        if (!err) 
            res.send(doc); 
        else 
            console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); 
    });
});


router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send("No Record Found");
    Prograd.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err)
            res.send(data);
        else
            console.log("Error Inserting ProGrad Details", res.send(err));
    })
});
module.exports = router;