const express = require ('express')

const router = express.Router()
const User= require ('../models/user.model')

/*router.get("/",(req, res)=>{
    res.json({
        msg: 'hello'
    })
})*/

router.post('/auth/signin', async(req, res)=>{
    const {email, password} = req.body;
    const user = await User.findUser(email, password)
    if (user){
        req.session.user= user._id
        res.json({
            msg:"you are successfuly login",
            auth: true
        })
    }else{
        res.json({
            msg:"you can't connect",
            auth: false
        })
    }

})
router.post('/auth/signup',(req, res)=>{
    const  user = new User(req.body)
    req.session.user= user._id
    user.save().then((result)=>{
        res.json({
            msg: "success created user",
            auth:true
        })
    }).catch((err)=>{
       res.json({
           msg: "unable to create user",
           auth:false
       })
    })
})
router.get('/auth/hassignned',(req,res)=>{
if (req.session.user){
    return res.json({
        auth:true,
        message:'you are signne'
    })
}
return res.json({
    auth:false,
    msg: ' youare not login'
})
})
router.get("/auth/signout", (req, res)=>{
    req.session.destroy()
    res.json({
        auth:false
    })
})

module.exports= router