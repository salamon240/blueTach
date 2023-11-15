const express=require('express')
const app=express()
const bodyParser = require('body-parser');
const dotenv=require("dotenv")
const cors = require('cors');

const recpieRout=require('./route/recipeRoute');
const userRouter=require('./route/users')


// Middleware to parse incoming request bodies.
app.use(bodyParser.json());

// Middleware to enable Cross-Origin Resource Sharing.
app.use(cors());
app.use(recpieRout)
app.use(userRouter)
// Use the recipe routes for handling recipe-related endpoints.

// Middleware to handle errors.
app.use((err, req, res, next) => {
    console.log(err);
});



app.listen(process.env.PORT,()=>{

    console.log("backend is runnig");
});