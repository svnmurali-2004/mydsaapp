const express=require("express")
const app= express();
const cors=require("cors")
app.use(cors())
app.use(express.json())
const {MongoClient}=require ("mongodb")
const uri=require("./uri.js")
const cluster=new MongoClient(uri)
cluster.connect().then(console.log("connected"));
app.listen(5000,()=>{console.log("app listen ing")

})
const path = require('path');
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
app.get("/",async(req,res)=>{
    res.send(index)
})
app.post("/signup",async(req,res)=>{
    try{
        const data=req.body
        const accounts =await cluster.db("mydsaapp").collection("testaccounts")
        const res1=await accounts.findOne({rollnum:data.rollnum})
        const inserteddtata=await accounts.findOne({rollnum:data.rollnum})
        if (res1==null){
            const res2=await accounts.insertOne(data)
            console.log(res2)
            res.send(res1)
        }
        else{
            res.send({acknowledged:false})
        }
    }finally{
        console.log("signup executed")
        res.send({"acknowledged":"error in the server computation"})
    }
})


//sign in method
app.post("/signin",async(req,res)=>{
    try{
        const data=req.body
        const accounts =await cluster.db("mydsaapp").collection("testaccounts")
        const res1=await accounts.findOne({rollnum:data.rollnum})
        if (res1==null){
            res.send({acknowledged:false,description:"credentials mismatch or user doesn't exist"})
        }else{
            res.send({...res1,acknowledged:true})
        }
    }finally{
        console.log("signin executed")
    }
})