
const express = require('express')
const router = new express.Router()
const userController = require('../Controller/userController')
const companyController = require('../Controller/companyController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
// register API

router.post('/register',userController.register)


// login API

router.post('/login',userController.login)


// add company

router.post('/company/add',jwtMiddleware,companyController.addcompany)


// get companies

router.get("/company/get",jwtMiddleware,companyController.getCompany)



// delete company
router.delete("/company/:id",jwtMiddleware,companyController.deleteCompanyController)

// export router

module.exports = router