const Services = require ('../models/Services')

exports.findAll = (req,res)=>{
    Services.find().then(services =>{
        res.send(services)
    }).catch(err =>{
        res.status(500).send({
            message:err.message
        })
    })
}