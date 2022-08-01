
const Username = require('../models/users');

exports.getAddUser=(req , res, next)=>{ 
    //res.sendFile(path.join(rootDir,'views','admin.html'))
    res.render('admin',{pageTitle: "ADMIN PORTAL"})
};

exports.postAddUser=(req ,res ,next )=>{
    
    console.log(req.body);
    const user = new Username (req.body.username);
    user.save();
    //console.log(usernames);
    res.redirect('/admin/add-user');
};

exports.getUsers = (req , res, next)=>{ 
    console.log("in another the middleware user.js");
    Username.fetchAll((user)=>{
        res.render('users',{usrsnms: user, pageTitle: 'Node-js'});
    });
    
};
