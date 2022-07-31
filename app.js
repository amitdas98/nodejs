const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.set('view engine','pug');
app.set('views','views');


const admindata = require('./routes/admin');
const user = require('./routes/user');
 

app.use(bodyParser.urlencoded( ))
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',admindata.routes);
app.use(user);

app.use((req , res, next)=>{
    res.statusCode = 404;
    res.render('404');
});

app.listen(3000);