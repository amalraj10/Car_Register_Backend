const express = require('express')

const registerController = require('../controllers/registerController')

const multerConfig = require('../Middleware/multerMiddleware')

const router = new express.Router()

router.post('/register/add',multerConfig.array('vattacthment'),registerController.register)

router.get('/register/details',registerController.getallDetails)

module.exports = router