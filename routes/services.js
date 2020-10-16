const express = require('express')
const router = express.Router()
const serviceModel = require('./../models/Services')
const offreModel = require ('../models/Offres')


router.post('/new', async (req,res)=>{
 
    const newservice= new serviceModel(req.body)
  
    try {
      const service = await newservice.save()
      if(!service) throw Error('Something went wrong while saving blog')

      res.status(200).json(service)
    }catch{
      res.status(400).json({msg: err})
    }
  })
  const services = require('../controllers/services')
const { response } = require('express')
  router.get('/All',services.findAll)


router.delete('/delete/:id',async(req, res) =>{
    const id = req.params.id
    await serviceModel.findByIdAndRemove(id).exec()
    res.send("deleted")
  })

router.post('/create',(req,res)=>{
  offreModel.findById(req.params.id,(err, offre)=>{
    if(err){ res.json({msg:err})}else{
      serviceModel.create(req.body.services, (err, service)=>{
        if(err){
          res.json({msg:err})
        }else{
          service.save();
          offre.services.push(service)
          offre.save()
        }
      })
    }

  })
})

module.exports= router