const express = require('express')
const Offre = require ('../models/Offres')
const router = express.Router()




const OffreController = require('../controllers/offre')

router.post("/:id", (req, res) =>{
  serviceModel.findOne(req.body).then(service =>{
    return offreModel.findOneAndUpdate({_id:req.params.id},
      {$push:{services: service._id}},{new: true})

  }).then(offre=>{
    res.json(offre)
  }).catch(err =>{
    res.json(err)
  })
})

router.post ("/neww",(req,res)=>{
  Offre.create(req.body).then(offre =>{
    res.status(200).json(offre)
  }).catch(err =>{
    res.json(err)
  })
})
router.post('/new', async (req, res) =>{
   
   
  const offre = new Offre({
      services: req.body.services,
      name:req.body.name,
      description:req.body.description,
      price:req.body.price
  })
  try{
      const newoffre = await offre.save()
  if(!offre) throw Error('something happned')
  res.status(200).json(newoffre)
}
catch(err){
  res.status(400).json({msg: err})
}
})
router.get('/all', (req, res)=>{
  Offre.find()
  .populate('services','name').exec().then(offre =>{
      res.status(200).json(offre)
  }).catch(err => {
      res.status(500).json({
        error: err
      });
    });
}
)




    
/*router.get('/', async(req, res)=)>{
  const offre = await Offre.find()
})*/



module.exports= router