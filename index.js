const express=require("express")
const app= express();
const cors=require("cors")
app.use(cors())
app.use(express.json())
const {MongoClient,ObjectId}=require ("mongodb")
const uri=require("./uri.js")
const cluster=new MongoClient(uri)
cluster.connect().then(console.log("connected"));
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || 5000;
const htmlPasswordResetSuccessTemplate=require("./htmlPasswordResetSuccessTemplate.js")
const ejs=require('ejs')
app.set('view engine',"ejs")
app.listen(port,()=>{console.log("app listening")

})
const path = require('path');
const { error } = require("console");
app.use(express.static('public'))
const nodemailer=require('nodemailer')//importing node mailer
/*
const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{user:'codebox012@gmail.com',pass:"posd jyxt spcv yqtr"

    }
})*/
const transporter=nodemailer.createTransport({
    service:"hotmail",
    auth:{
        user:"mydsaapp@hotmail.com",
        pass:"Murali@2004"
    }
})

const htmlMailVerifyTemplate=(verificationLink)=>{return( `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
</head>

<body style="font-family: Arial, sans-serif;">

    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
        <tr>
            <td style="background-color: #f7f7f7; padding: 20px;">
                <h2 style="color: #333;">MyDSAApp - Email Verification</h2>
            </td>
        </tr>
        <tr>
            <td style="background-color: #fff; padding: 20px;">
                <p style="color: #666;">Dear User,</p>
                <p style="color: #666;">Welcome to MyDSAApp! Please verify your email address by clicking the link below:</p>
                <p style="text-align: center; margin: 20px 0;">
                    <a href="${verificationLink}" style="background-color: #007bff; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 5px;">Verify Email</a>
                </p>
                <p style="color: #666;">If you didn't request this verification, you can ignore this email.</p>
                <p style="color: #666;">Thank you,</p>
                <p style="color: #666;">The MyDSAApp Team</p>
            </td>
        </tr>
    </table>

</body>

</html>
`)}
app.get("/helloserver",async(req,res)=>{//dummy one
    res.send("helloserver")
})
/*
app.post("/signup",async(req,res)=>{
    try{
        const data=req.body
        const accounts =await cluster.db("mydsaapp").collection("testaccounts")
        const res1=await accounts.findOne({rollnum:data.rollnum})
        //const inserteddtata=await accounts.findOne({rollnum:data.rollnum})
        if (res1==null){
            const res2=await accounts.insertOne(data)
            console.log(res2)
            res.send({...res1,acknowledged:true})
        }
        else{
            res.send({acknowledged:false,description:"user aldready exists"})
        }
    } 
    catch(err){ res.send({acknowledged:false,description:"error in the server computation"})}finally{
        console.log("signup executed")
       
    }
})*/
app.post("/signup",async(req,res)=>{
    try{
        const data=req.body
        const accounts = cluster.db("mydsaapp").collection("testaccounts")
        let mailverify=cluster.db("mydsaapp").collection("mailverify")
        const res1=await accounts.findOne({rollnum:data.rollnum})
        //const inserteddtata=await accounts.findOne({rollnum:data.rollnum})
        if (res1==null){
            let response=await mailverify.insertOne({account:JSON.stringify(data)})
            const verificationlink="https://"+req.get("host")+"/mailverify/"+response.insertedId
            await transporter.sendMail({
                from:"mydsaapp@hotmail.com",
                to:data.email,
                subject:'Mail Verification',
                html:htmlMailVerifyTemplate(verificationlink)
            },(err,info)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log(info)
                }
            })
            res.send({acknowledged:true})
        }
        else{
            res.send({acknowledged:false,description:"user aldready exists"})
        }
    } 
    catch(err){console.log(err); res.send({acknowledged:false,description:"error in the server computation"})}finally{
        console.log("signup executed")
       
    }
})

//sign in method
app.post("/signin",async(req,res)=>{
    try{
        const data=req.body

        console.log(data,"data from client")
        const accounts = cluster.db("mydsaapp").collection("testaccounts")
        const res1=await accounts.findOne({rollnum:data.rollnum}).catch(error=>{
            console.error(error)
        })
        console.log("response",res1)
        
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
});
app.post("/get/user",async(req,res)=>{
    try{
        const data=req.body

        console.log(data,"data from client")
        const accounts = cluster.db("mydsaapp").collection("testaccounts")
        const res1=await accounts.findOne({rollnum:data.rollnum}).catch(error=>{
            console.error(error)
        })
        res.send(res1)

        
    }catch(err){console.log(err)}finally{
        console.log("userreturned");
    }
})

//leaderboard method
app.get("/leaderboard",async(req,res)=>{
    const accounts=cluster.db("mydsaapp").collection("testaccounts")
    const result = await accounts.find({}, { projection: { name: 1,"status.score":1 ,_id:0 } }).sort({ "status.score": -1 }).toArray();
        
    console.log(result)
    res.send(result)
})

app.get("/questions",async(req,res)=>{
    const questions=cluster.db("mydsaapp").collection("questions")
    const response= await questions.find({}).toArray()
    res.send(response[0])
    console.log(response)
})
//user update
app.post("/userupdate",async(req,res)=>{
    const accounts=cluster.db("mydsaapp").collection("testaccounts")
    const data=req.body
    delete data.acknowledged
    delete data._id
    try{
    let response=await accounts.updateOne({rollnum:data.rollnum},{$set:data})
    console.log(response);
    res.send(response)}catch(error){
        console.log(error)
        res.send({acknowledged:false})
    }finally{
        console.log("userupdate executed successfully")
    }

})

let htmlOtpTemplate=(otp)=>{return(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Reset Password OTP</title>
    </head>
    
    <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
    
        <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1); padding: 20px;">
    
            <h2 style="color: #333; text-align: center;">Reset Password OTP</h2>
    
            <p style="color: #666; text-align: center;">Use the following One-Time Password (OTP) to reset your password:</p>
    
            <div style="text-align: center; margin-bottom: 20px;">
                <h1 style="color: #007bff; font-size: 48px; margin: 0;">${otp}</h1>
            </div>
    
            <p style="color: #666; text-align: center;">This OTP is valid for a single use and will expire after a short period of time.</p>
    
            <p style="color: #666; text-align: center;">If you didn't request this password reset, you can ignore this email.</p>
    
            <p style="color: #666; text-align: center;">Thank you,</p>
            <p style="color: #666; text-align: center;">The MyDSAApp Team</p>
    
        </div>
    
    </body>
    
    </html>
    `)}
app.post("/reset/password",async(req,res)=>{
    try{
    let otpcluster=cluster.db("mydsaapp").collection("otps")
   let otphandler=( await otpcluster.findOne({"role":"reset"})).otphandler
    console.log(otphandler)
    let data=req.body;
    const accounts=await cluster.db("mydsaapp").collection("testaccounts")
    let respo=await accounts.findOne({rollnum:data.rollnum})
    console.log(respo)
    if (respo==null){
        res.send({acknowledged:false,description:"account not exist"})
    }else{
    let otp=Math.ceil(Math.random()*1000)
    otphandler[data.rollnum]=otp
    await otpcluster.updateOne({"role":"reset"},{$set:{"otphandler":otphandler}})
    const mailoptions={
        from:"mydsaapp@hotmail.com",
        to:respo.email,
        subject:'password reset',
        html:htmlOtpTemplate(otp)
    }
    await transporter.sendMail(mailoptions,(err,info)=>{
        if (err){
            console.error(err)
            res.send({acknowledged:false,description:"mail server down"})
        }else{
            console.log(info)
            res.send({acknowledged:true,description:"success"})
        }
    })
}
}catch(err){
console.log("error in the reset password at line 213")
}
}
);

app.post("/reset/verify",async(req,res)=>{
    try{
    let data=req.body
    let otpcluster=cluster.db("mydsaapp").collection("otps")
   let otphandler=( await otpcluster.findOne({"role":"reset"})).otphandler
    if (data.otp==otphandler[data.rollnum]){
        delete otphandler[data.rollnum]
        const accounts=cluster.db("mydsaapp").collection("testaccounts")
        await accounts.updateOne({rollnum:data.rollnum},{$set:{password:data.password}})
        const mail=await accounts.findOne({rollnum:data.rollnum})
        await otpcluster.updateOne({"role":"reset"},{$set:{"otphandler":otphandler}})
        let mailmail={
            from:"mydsaapp@hotmail.com",
        to:mail.email,
        subject:'password reset success',
        html:htmlPasswordResetSuccessTemplate(data.rollnum,mail.name)

        }
        transporter.sendMail(mailmail,(err,info)=>{
            if(err){
                console.log(err)
            }else{
                console.log(info)
            }
        })
        res.send({acknowledged:true})

    }else{
        res.send({acknowledged:false})
    }}catch(err){
        console.log("error in mail verify at line 229")
        res.send({acknowledged:false})
    }
})
console.log(hostname)
let htmlCongratulationsTemplate=(Name)=>{return (`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Congratulations on Creating Your Account!</title>
</head>

<body style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">

    <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1); padding: 20px;">

        <h2 style="color: #333; text-align: center;">Congratulations on Creating Your Account!</h2>

        <p style="color: #666; text-align: center;">Dear ${Name},</p>

        <p style="color: #666; text-align: center;">Congratulations! You have successfully created an account on MyDSAApp.</p>

        <p style="color: #666; text-align: center;">You can now enjoy all the features and benefits our platform has to offer.</p>

        <p style="color: #666; text-align: center;">Thank you for joining us!</p>

        <p style="color: #666; text-align: center;">Best Regards,<br>The MyDSAApp Team</p>

    </div>

</body>

</html>`)}

app.get("/mailverify/:id", async (req, res) => {
    try {
        const data = req.params.id;
        const mailverify = await cluster.db("mydsaapp").collection("mailverify");
        console.log("Mailverify database connected");
        
        const response = await mailverify.findOne({ _id: new ObjectId(data) });
        
        if (!response) {
            return res.sendFile(path.join(__dirname, 'failure.html'));
        } else {
            const accounts = await cluster.db("mydsaapp").collection("testaccounts");
            const res2 = await accounts.insertOne(JSON.parse(response.account));
            console.log(res2);
            
            await mailverify.deleteOne({ _id: new ObjectId(data) });
            const user=JSON.parse(response.account)
            const mailoptions={
                from:"mydsaapp@hotmail.com",
                to:user.email,
                subject:'Account Created',
                html:htmlCongratulationsTemplate(user.name)
            }
            transporter.sendMail(mailoptions,(err,info)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log(info)
                }
            })
            return res.sendFile(path.join(__dirname, "success.html"));
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).send("Internal Server Error");
    }
});

//solution finder
app.get("/solutions/:id",async(req,res)=>{
    try{
    const id=req.params.id
    const solutionhandler=await cluster.db("mydsaapp").collection("solutions")
    const solution=await solutionhandler.findOne({_id:id})
    var ccode=`#include<iostream>

    int main() {
        std::cout << "Hey, 
    Striver!";
        std::cout << "Hey, 
    Striver!";
        return 0;
    }`;
    var pcode="456";var jcode=`public class Main {
        public static void main(String[] args) {
            for (int i = 0; i < 3; i++) {
                for (int j = 0; j < 3; j++) {
                    System.out.println("i = " + i + ", j = " + j);
                    // Nested loop code
                }
            }
        }
    }`
    if (solution==null){
        res.render('solutionnotfound',{questionId:id})
        //res.render('solution',{cppCode:ccode,pythonCode:pcode,javaCode:jcode})
    }else{
        res.render('solution',{cppCode:ccode,pythonCode:pcode,javaCode:jcode})
    }
    }catch(err){
        console.log(err,"error at line 356")
    }

})
/*
const temptransporter=nodemailer.createTransport({
    service:"hotmail",
    auth:{
        user:"mydsaapp@hotmail.com",
        pass:"Murali@2004"
    }
})
const tempmail={
    from:"mydsaapp@hotmail.com",
    to:"svnmurali1@gmail.com",
    sub:"test mail",
    text:"hello"
}
temptransporter.sendMail(tempmail,(err,info)=>{
    if(err){
        console.log(err)
    }else{
        console.log(info)
    }
})
transporter.sendMail({
    from:"codebox012@gmail.com",
    to:"svnmurali1@gmail.com",
    sub:"test mail",
    text:"hello"
},(err,info)=>{
    if(err){
        console.log(err)
    }else{
        console.log(info)
    }
})*/
