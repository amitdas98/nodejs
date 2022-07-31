const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

const usernames = [];

router.get('/add-user',(req , res, next)=>{ 
    //res.sendFile(path.join(rootDir,'views','admin.html'))
    res.render('admin',{pageTitle: "ADMIN PORTAL"})
});

router.post('/add-user',(req ,res ,next )=>{
    
    console.log(req.body);
    usernames.push({username: req.body.username});
    console.log(usernames);
    res.redirect('/admin/add-user');
});

//just chechking git 
exports.routes = router;
exports.usernames = usernames;