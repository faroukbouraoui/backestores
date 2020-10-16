const mongoose = require ('mongoose')

const partenaireSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    logo:{
        name: {
            type: String,
            trim: true,
            required: true
        },
        image: {
            type: String,
            trim: true,
            required: true
        }
    }
  
    
})
module.exports= mongoose.modelNames('partenaires',partenaireSchema)