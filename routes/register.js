const express = require('express');
const router = express.Router();
const userController = require('../controllers/register');
const Controller = require('../controllers/userController');
const { authenticate } = require('../Firebase');
 
  
router.post('/register',userController.register)
router.post('/login',userController.login)
router.get('/all-users',authenticate,Controller.getUser)


module.exports=router