const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');


router.get('/users',(req , res, next)=>{ 
    res.sendFile(path.join(rootDir,'views','admin.html'))
});
router.use('/',(req,res,next)=>{
    res.send(`<h1>Admin Page is Not availble</h1>`)
});
router.post('/user',(req ,res ,next )=>{
    console.log(req.body);
    
    res.redirect('/');
});

module.exports = router;