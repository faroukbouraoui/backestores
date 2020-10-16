const mongoose = require("mongoose")

const Offre = require ('../models/Offres')
const Service = require ('../models/Services')

exports.offres_get_all = (req, res, next)=>{
    Offre.find()
    .populate(service,service._id).then(offre =>{
        res.status(200).json(offre)
    }).catch(err =>{
        res.status(500).json({error: err})
    })
}