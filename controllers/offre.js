const mongoose = require("mongoose")

const Offre = require ('../models/Offres')


exports.offres_get_all = (req, res)=>{
    Offre.find()
    .populate('services','name').exec().then(offre =>{
        res.status(200).json(offre)
    }).catch(err => {
        res.status(500).json({
          error: err
        });
      });
}


