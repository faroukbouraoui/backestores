const mongoose = require('mongoose')

const servicesSchema = new mongoose.Schema({
    name : {
        type:String ,
        required: true
    },
    description:{
        type:String ,
        required: true
    },
    offres:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Offres"
        }
    ]


})
module.exports= mongoose.model('Services', servicesSchema)