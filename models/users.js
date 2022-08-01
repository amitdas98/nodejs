
const fs = require('fs');
const path = require('path');
const username = [];
module.exports = class user {
    constructor(u){
        this.username=u;
    }
    save(){
        username.push(this);
        const p = path.join(__dirname,'../',
        'data',
        'users.json');
        fs.readFile(p, (err,fileContent)=>{
            let username = []
            if (!err){
                username = JSON.parse(fileContent);
            }
            username.push(this);
            fs.writeFile(p,JSON.stringify(username),(err)=>{
                console.log(err);
            });
        });
    }

    static fetchAll(cb){
        const p = path.join(__dirname,'../',
        'data',
        'users.json');
        fs.readFile(p,(err,fileContent) =>{
            if (err){
                cb([]);
            }
            cb(JSON.parse(fileContent));
        });
    }
};