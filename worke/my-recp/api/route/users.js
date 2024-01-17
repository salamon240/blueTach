const express = require('express');
const bycrept= require('bcryptjs')
const fs = require('fs');
const path = require('path');


const userRouter = express.Router();

const recipesFilePath = path.join(__dirname, 'users.json');

userRouter.post('/register',(req,res)=>{
    console.log("register",req.body)
    const userName=req.body.userName;
    const password=req.body.password;
    const pohonNumber=req.body.phonNumber;
    const email=req.body.email;
   
    const hashePassword=bycrept.hashSync(password,10)
    const newUser={
        id:Date.now().toString(),
        userName,
        hashePassword,
        pohonNumber,
        email
    }

    const users=JSON.parse(fs.readFileSync(recipesFilePath,"utf8"))
    
    users.push(newUser)
    fs.writeFileSync(recipesFilePath,JSON.stringify(users,null,2),'utf8');
    res.json({massage:"user register successfully",userId:newUser.id})
})
userRouter.post('/login',(req,res)=>{
    const email=req.body.email;
    const password=req.body.password; 
      
    const hashePassword=bycrept.hashSync(password,10)
    const newUser={
        id:Date.now().toString(),
        email,
        hashePassword
    }

    const users=JSON.parse(fs.readFileSync(recipesFilePath,"utf8"))
    
    users.push(newUser)
    fs.writeFileSync(recipesFilePath,JSON.stringify(users,null,2),'utf8');
    res.json({massage:"user login successfully",userId:newUser.id})
})

module.exports =userRouter;