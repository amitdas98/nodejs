const express = require('express');
const router = express.Router();
const userController = require ('../controllers/add-user')

router.get('/edit-user',userController.getEditUser);
router.post('/edit-user/:userID',userController.getEditUserByID);

router.get('/delete-user/:userID',userController.getDeleteUser);
router.get('/add-user',userController.getAddUser);
router.post('/add-user',userController.postAddUser);









//just chechking git 
exports.routes = router;
