const mongoose = require ('mongoose')


mongoose.connect('mongodb://localhost:27017/estoresdb',{ useNewUrlParser: true , useUnifiedTopology: true },
err=> {
    if (!err)
    console.log('connection succeed')
    else 
    console.log('connection failed :' , JSON.stringify(err, undefined,2))
}
)