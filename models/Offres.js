const mongoose = require ('mongoose')

const offersSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    template:{
        type:String
    },
    services:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Services"
        }
    ]

})
module.exports = mongoose.model('Offres',offersSchema)