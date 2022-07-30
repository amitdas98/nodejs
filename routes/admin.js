const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

const usernames = [];

router.get('/user',(req , res, next)=>{ 
    res.sendFile(path.join(rootDir,'views','admin.html'))
});

router.post('/user',(req ,res ,next )=>{
    
    console.log(req.body);
    usernames.push(req.body);
    res.redirect('/admin/user');
});

//just chechking git 
exports.routes = router;
exports.usernames = usernames;