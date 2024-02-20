
require('dotenv').config()


const express = require('express')


const cors = require('cors')


const router = require('./Routers/router')

require('./DB/connections')


const CgServer = express()

CgServer.use(cors())



CgServer.use(express.json())


CgServer.use(router)

CgServer.use('/uploads',express.static('./uploads'))


const PORT = 4000 || process.env


    CgServer.listen(PORT,()=>{
    console.log(`SERVER RUNNING SUCCESSFULLY AT PORT NUMBER ${PORT}`);
})

    CgServer.get('/',(req,res)=>
res.send(`<h1>NestQuest Server Running successfully and ready to accept from clients</h1>`))