
const express = require('express')
const router = new express.Router()
const userController = require('../Controller/userController')
const companyController = require('../Controller/companyController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
// register API

router.post('/register',userController.register)


// login API

router.post('/login',userController.login)


// addpcompany Api

router.post('/company/add',jwtMiddleware,companyController.addcompany)



// export router

module.exports = router