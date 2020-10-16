const express = require('express')
const router = express.Router()
const leadModel = require('./../models/Lead')

router.post('/new', async (req,res)=>{
 
    const newlead= new leadModel(req.body)
  
    try {
      const lead = await newlead.save()
      if(!lead) throw Error('Something went wrong while saving blog')

      res.status(200).json(lead)
    }catch{
      res.status(400).json({msg: err})
    }
  })


module.exports =router