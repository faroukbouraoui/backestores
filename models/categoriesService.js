const mongoose = require('mongoose')

const categoriesServiceSchema = new mongoose.Schema({
    name : {
        type:String ,
        required: true
    },
    description:{
        type:String ,
        required: true
    },
    services:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Services"
        }
    ]


})
module.exports= mongoose.model('CategoriesServices', categoriesServiceSchema)