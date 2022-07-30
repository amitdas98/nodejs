const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
const admindata = require('../routes/admin');
router.get('/',(req , res, next)=>{ 
    console.log("in another the middleware user.js");
    console.log( admindata.usernames);
    res.sendFile(path.join(rootDir,'views','users.html'));
});

module.exports = router;