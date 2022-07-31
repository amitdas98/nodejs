
const { json } = require('body-parser');
const fs = require('fs');
const path = require('path');
module.exports = class user {
    constructor(username){
        this.username=username;
    }
    save(){
        usernames.push(this);
        const p = path.join(path.dirname(process.mainModule.filename),
        'data',
        'users.json');
        fs.readFile(p, (err,fileContent)=>{
            let usernames = []
            if (!err){
                usernames = JSON.parse(fileContent);
            }
            usernames.push(this);
            fs.writeFile(p,JSON.stringify(usernames),(err)=>{
                console.log(err);
            })
        });
    }

    static fetchAll(){
        return usernames;
    }
};