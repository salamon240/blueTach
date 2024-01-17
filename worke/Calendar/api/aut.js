const express =require('express');
const fs=require('fs')
const router = require("express").Router();

router.get("/",async (req,res)=>{
    try{
        const fileData=fs.readFileSync('calendar.text','utf-8')
        console.log(fileData)
    }catch(err){
res.status(500).json(err)
    }
})