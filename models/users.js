
const fs = require('fs');
const path = require('path');
//const username = [];

//path p
const p = path.join(__dirname,'../',
'data',
'users.json');

//get user file from fucntion
const getUsersFromFile = cb => {
   
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
  };

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//user class model
module.exports = class user {
    constructor(u,number,email,uID){
        this.username=u;
        this.number = number;
        this.email = email;
        this.userID = uID;
    }
    save(){
        getUsersFromFile(users =>{
            // if (this.userID){
            //   const currentUser = users.findbyID(user => user.id===this.userID)
            //   const updatedUser = [...users];
            // }  
            this.userID = randomInteger(100,10000).toString();
            users.push(this);
            fs.writeFile(p,JSON.stringify(users),err=>{
                console.log(err);
            });
            //console.log(users);
        });
    }
    static delete(id){
        getUsersFromFile(users => {
          console.log(users);
          const user = users.filter(users => users.userID!==id);
          console.log(user);
          fs.writeFile(p,JSON.stringify(user),err=>{
            console.log(err);
        });
        });
    }


    static fetchAll(cb){
        getUsersFromFile(cb);
    }

    static findbyID (id,cb){
        //console.log(`direct passed ${id}`);
        getUsersFromFile(users=>{

            const user = users.find(p => p.userID===id);
            //console.log(`indside static find byid`);
            //console.log(user);
            
            cb(user);
        });
    }
};