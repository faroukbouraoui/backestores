const mongoose= require ('mongoose')
const bcrypt = require("bcryptjs")
const userSchema = mongoose.Schema({
    email:{
        type:String,
    },
    password:{
        type: String
    }
})
userSchema.statics.findUser= async function(email, password){
 const user=   await User.findOne({email})
 if(!user){
     return;
 }
 const isMutch = await bcrypt.compare(password, user.password)
 if(!isMutch){
     return;
 }
 
     return user


}

userSchema.pre('save',async function(next){
    const user = this;
    if(user.isModified("password")){
        user.password= await bcrypt.hash(user.password,0)
    }
    next()
})

const User = mongoose.model('User',userSchema)
module.exports = User