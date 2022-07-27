const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');
router.get('/',(req , res, next)=>{ 
    console.log("in another the middleware");
    res.sendFile(path.join(rootDir,'views','users.html'));
});

module.exports = router;