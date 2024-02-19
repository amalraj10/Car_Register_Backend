//1.import dotenv
require('dotenv').config()

//2.import express
const express = require('express')

//3.import cors
const cors = require('cors')


//import router
const router = require('./Routers/router')

//import connection.js file
require('./DB/connections')

//4.create server

const CgServer = express()

//5.use of cors in server
    CgServer.use(cors())



//6.Returns a middleware that only parses json- javascript object
CgServer.use(express.json())


//use of router
CgServer.use(router)



//7.customize port
const PORT = 4000 || process.env

//to run the server
    CgServer.listen(PORT,()=>{
    console.log(`SERVER RUNNING SUCCESSFULLY AT PORT NUMBER ${PORT}`);
})

    CgServer.get('/',(req,res)=>
res.send(`<h1>NestQuest Server Running successfully and ready to accept from clients</h1>`))