const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin');
const user = require('./routes/user');
 

app.use(bodyParser.urlencoded( ))
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes);
app.use(user);

app.use((req , res, next)=>{
    res.statusCode = 404;
    res.sendFile(path.join(__dirname,'routes','404.html'))
});

app.listen(3000);