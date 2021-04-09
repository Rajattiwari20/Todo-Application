const express = require('express');

//for database
const db = require('./config/mongoose')
const Todo = require('./models/todo');

const app = express();
const port = 8000;

//set up the view engine 
app.set('view engine' , 'ejs');
app.set('views' , './views');

//for data parser
app.use(express.urlencoded());

app.use(express.static('assets'));
//router
app.use('/' , require('./routes'))



app.listen(port , function(err){
    if(err){
        console.log(`Error Express Server : ${err}`);
        return;
    }

    console.log(`Express server is up and running on port ${port}`);
});