const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
const adminRoutes = require('../routes/admin');
const admindata = require('../controllers/add-user');

router.get('/',admindata.getUsers);

module.exports = router;