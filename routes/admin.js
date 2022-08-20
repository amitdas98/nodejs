const express = require('express');
const router = express.Router();
const userController = require ('../controllers/add-user')

router.get('/delete-user/:userID',userController.getDeleteUser);
router.get('/add-user',userController.getAddUser);
router.get('/edit-user',userController.getEditUser);
router.post('/add-user',userController.postAddUser);




//just chechking git 
exports.routes = router;
