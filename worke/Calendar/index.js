const express= require('express')
const fs=require('fs')
const app=express()

const path = require('path');

// Set the static folder to serve the HTML files
app.use(express.static(path.join(__dirname, 'Calendar')));
app.use(express.static('caledar.css'))
// Serve the index.html file when the user accesses the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'calendar.html'));
    res.sendFile(path.join(__dirname, 'calendar.css'));
});

fs.readFile('calender.text','utf-8',(err,data)=>{
  if(err){
    console.error('error reading this file')
  }else{
    console.log("acssing read resolt")
    console.log (data)
      
    
  }
})
app.get('/', function (req, res) {
    res.send('Hello World')
    console.log("api worke")
  })

  
  app.listen(3000,()=>{
    console.log("backend is runnig");
  })