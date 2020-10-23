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


  router.get('/all',  (req,res)=>{
    serviceModel.find().then(services =>{
        res.send(services)
    }).catch(err =>{
        res.status(500).send({
            message:err.message
        })
    })
})


router.patch ('/update/:id',async(req, res, next)=>{
  
  try{
    const id = req.params.id
    const updates = req.body
    const result = await serviceModel.findByIdAndUpdate(id, updates)
    if(!result){
      throw createError(404, 'service not exist')
    }
    res.send(result)
  }catch(error){
    console.log(error.message)
  }
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
router.delete('/delete/:id',async(req,res)=>{
  try{
      const service = await serviceModel.findByIdAndDelete(req.params.id)
      if(!service) throw Error('not found blog');
      res.status(200).json({success:true})
  }catch(err){
    res.status(400).json({msg: err})
  }
}) 

module.exports= router