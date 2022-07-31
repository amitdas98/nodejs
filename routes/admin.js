const express = require('express');
const router = express.Router();
const path = require('path');
const userController = require ('../controllers/add-user')

router.get('/add-user',userController.getAddUser);

router.post('/add-user',userController.postAddUser);

//just chechking git 
exports.routes = router;
