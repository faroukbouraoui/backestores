const mongoose = require ('mongoose')
require('mongoose-type-email');
const leadSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    entreprise:{
        type:String,
        required:true
    },
    rne:{
        type:Number,
    },
    numtel:{
        type:Number,
        required:true
    },
    email:{
        type:mongoose.SchemaTypes.Email,
        required:true

    },
    adresse:{
        type:String
    }
})

module.exports = mongoose.model('Lead',leadSchema)