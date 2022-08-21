
const user = require('../models/users');
const Username = require('../models/users');
exports.getUser = (req, res, next)=>{
    const userID = req.params.userID;
    let userforalert;
    Username.findbyID(userID,user =>{
        //console.log(`in controller`);
        console.log(user);
        userforalert = user;
        res.render('admin/userDetail',{userDetail: user});
    });

    // alert(`you clicked on ${userforalert}`);
    //console.log(userID);
    
};

exports.getEditUser=(req,res,next)=>{
    Username.fetchAll((user)=>{
        res.render('admin/editUser',{usrsnms: user, pageTitle: 'EDIT'});
    });
}
exports.getEditUserByID=(req,res,next)=>{
    console.log(req.params.userID);
    Username.fetchAll((user)=>{
        res.render('admin/editUserByID',{usrsnms: user, pageTitle: 'EDIT'});
    });
}
exports.getAddUser=(req , res, next)=>{ 
    //res.sendFile(path.join(rootDir,'views','admin.html'))
    res.render('admin/admin',{pageTitle: "ADMIN PORTAL"})
};

exports.postAddUser=(req ,res ,next )=>{
    
    //console.log(req.body.email);
    const user = new Username (req.body.username,req.body.number,req.body.email);
    user.save();
    //console.log(user);
    res.redirect('add-user');
};

exports.getUsers = (req , res, next)=>{ 
    //console.log("in another the middleware user.js");
    Username.fetchAll((user)=>{
        res.render('admin/users',{usrsnms: user, pageTitle: 'Node-js'});
    });
    
};

exports.getDeleteUser = (req,res,next)=>{
    const userID = req.params.userID;
    //user.delete(userID);
    Username.delete(userID);
    Username.fetchAll((user)=>{
        res.render('admin/users',{usrsnms: user, pageTitle: 'Node-js'});
    });   
}


