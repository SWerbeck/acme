const express = require('express')
const app = express()
const router = require('express').Router()

const apiRouter=require('./api');
app.use('/api',apiRouter);

// const apiRouter = require("./api");
// app.use("/api", apiRouter);

const PORT = 3000
app.listen(PORT, ()=>{
    console.log("you are using port: ", PORT)
})



