const express = require('express');
const router = express.Router();
const admindata = require('../controllers/add-user');

router.get('/',admindata.getUsers);

router.get('/users/:userID',admindata.getUser);

module.exports = router;