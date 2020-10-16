const express = require('express')
const router = express.Router()

const OffreController = require('../controllers/offre')

/*router.post("/:id", (req, res) =>{
  serviceModel.findOne(req.body).then(service =>{
    return offreModel.findOneAndUpdate({_id:req.params.id},
      {$push:{services: service._id}},{new: true})

  }).then(offre=>{
    res.json(offre)
  }).catch(err =>{
    res.json(err)
  })
})*/

/*router.post ("/neww",(req,res)=>{
  offreModel.create(req.body).then(offre =>{
    res.status(200).json(o)
  }).catch(err =>{
    res.json(err)
  })
})*/




router.get("/", OffreController.offres_get_all);

router.post("/", OffreController.offres_create_offre);

router.get("/:offreId", OffreController.offres_get_offre);

router.delete("/:offreId", OffreController.offres_delete_offre);
    




module.exports= router