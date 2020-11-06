const express = require('express')
const router = express.Router()
const CategoriesServiceModel = require('./../models/categoriesService')




router.post ("/neww",(req,res)=>{
    CategoriesServiceModel.create(req.body).populate('services').then(category =>{
      res.status(200).json(category)
    }).catch(err =>{
      res.json(err)
    })
  })
  router.post('/new', async (req, res) =>{
   
   
    const category = new CategoriesServiceModel({
        services: req.body.services,
        name:req.body.name,
        description:req.body.description,
       
    }).populate('services')
    try{
        const newcategory = await category.save()
    if(!category) throw Error('something happned')
    res.status(200).json(newcategory)
  }
  catch(err){
    res.status(400).json({msg: err})
  }
  })

module.exports = router