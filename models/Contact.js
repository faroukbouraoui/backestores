const mongoose = require ('mongoose')
const Email = require('mongoose-type-email')

const ContactModel = new mongoose.Schema({
    prenom:{
        type:String,
        required:true
    },
    nom:{
        type:String,
        required:true
    },
    email:{
        type:Email,
        required:true
    },
    demande:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('Contact',ContactModel)