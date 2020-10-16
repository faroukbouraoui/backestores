require('./db')

const express = require('express')
const morgan = require("morgan");
const cors = require('cors')
const blogRouter = require('./routes/blog')
const serviceRouter = require('./routes/services')
const offreRouter = require('./routes/offre')
const leadRouter = require('./routes/lead')
const partenaireRouter = require ('./routes/partenaire')
var app = express();
app.use(express.json())
app.use(cors())
app.use(morgan("dev"));


/*app.post('/new', async (req,res)=>{
  const title = req.body.title
  const author = req.body.author
  const blog= new BlogModel({title: title, author:author})

  try {
    await blog.save();
  }catch(err){
    console.log(err)
  }
})
app.put('/update', async (req,res)=>{
  const newtitle = req.body.newtitle
  const id = req.body.id
  

  try {
   await BlogModel.findById(id,(err,updatedblog)=>{
      updatedblog.title = newtitle
      updatedblog.save()
      res.send("update")
    })
  }catch(err){
    console.log(err)
  }
})

app.delete('/delete/:id',async(req, res) =>{
  const id = req.params.id
  await BlogModel.findByIdAndRemove(id).exec()
  res.send("deleted")
})

app.get('/read', async(req,res)=>{
  BlogModel.find({},(err,result)=>{
    if(err){
      res.send(err)
    }
    res.send(result)
  })
})*/



app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});




app.use('/blogs',blogRouter)
app.use('/services',serviceRouter)
app.use('/offres',offreRouter)
app.use('/leads',leadRouter)
app.use('/partenaires',partenaireRouter)
app.listen(4000, ()=> console.log('server started at : 4000'))