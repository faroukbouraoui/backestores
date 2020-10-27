const express = require('express')

const router = express.Router()
const ContactModel = require ('./../models/Contact')

router.get('/readall', async(req,res)=>{
    try{
        const contact = await ContactModel.find()
        if(!contact) throw Error ('no contact found');
        res.status(200).json(contact)
    }catch(err){
        res.status(400).json({msg:err})
    }
})

router.post('/new',async(req,res)=>{
    const newcontact = new ContactModel(req.body)
    try{
        const contact = await newcontact.save()
        if(!contact) throw Error('something happned')

        res.status(200).json(contact)
    }catch(err){

        res.status(400).json({msg: err})
    }
})

module.exports=router