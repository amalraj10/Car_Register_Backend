//setup path to resolve request

//import express module
const express = require('express')

//import controller
const registerController = require('../controllers/registerController')

const multerConfig = require('../Middleware/multerMiddleware')


//create an object for Router class inside express module
const router = new express.Router()



//vechile registration
router.post('/register/add',multerConfig.array('vattacthment'),registerController.register)




//export router
module.exports = router