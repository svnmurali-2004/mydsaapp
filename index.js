const express=require("express")
const app= express();
const cors=require("cors")
app.use(cors())
app.use(express.json())
const {MongoClient}=require ("mongodb")
const uri=require("./uri.js")
const cluster=new MongoClient(uri)
cluster.connect().then(console.log("connected"));
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 5000;
app.listen(port,()=>{console.log("app listen ing")

})
const path = require('path');
const { error } = require("console");
app.use(express.static('public'))
app.post("/signup",async(req,res)=>{
    try{
        const data=req.body
        const accounts =await cluster.db("mydsaapp").collection("testaccounts")
        const res1=await accounts.findOne({rollnum:data.rollnum})
        //const inserteddtata=await accounts.findOne({rollnum:data.rollnum})
        if (res1==null){
            const res2=await accounts.insertOne(data)
            console.log(res2)
            res.send(res2)
        }
        else{
            res.send({acknowledged:false,description:"user aldready exists"})
        }
    } 
    catch(err){ res.send({"acknowledged":"error in the server computation"})}finally{
        console.log("signup executed")
       
    }
})


//sign in method
app.post("/signin",async(req,res)=>{
    try{
        const data=req.body
        console.log(data)
        const accounts = cluster.db("mydsaapp").collection("testaccounts")
        const res1=await accounts.findOne({rollnum:data.rollnum}).catch(error=>{
            console.error(error)
        })
        
        
        if (res1==null){
            res.send({acknowledged:false,description:"unvalid user or user doesnt exist"})
        }else{
            if(data.password==res1.password){
                console.log(res1)
            res.send({...res1,acknowledged:true})}else{
                res.send({acknowledged:false,description:"invalid password"})
            }
        }
    }finally{
        console.log("signin executed");
    }
})

//leaderboard method
app.get("/leaderboard",async(req,res)=>{
    const accounts=cluster.db("mydsaapp").collection("testaccounts")
    const result = await accounts.find({}, { projection: { name: 1,"status.score":1 ,_id:0 } }).sort({ "status.score": -1 }).toArray();
        
    console.log(result)
    res.send(result)
})