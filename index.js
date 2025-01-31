// built in modules use karte hain hum isme os module ,fs module, 
// module ko include karte hain 
//const isliye kyoki hum usse change nahi karna chahte 

const express = require('express'); //framework for nodejs to build web applications easily for creating routes,handling request and sending responses 
const userRoutes = require('./routes/userroutes.js')
const methodOverride=require('method-override');//This package is used to override HTTP methods 
const app = express();//execution app is main object of my express application used to set up routes,middleware and start the server
const path=require('path');//This module is part of Node.js. It's used for handling file paths efficiently.

app.use(express.urlencoded({extended:true}));//parses incoming from data (converts the data into a javascript object so i can access it in my code )(app.use()-->middleware ko use karne ke liye )
app.use(express.static(path.join(__dirname,"static")))//html css files  express function 
app.use(methodOverride("_method"));

app.set('view engine', 'ejs');// humlog ejs(template engine ) use kar rahe hain usmein bhi view engine template engine use karne ke liye view engine hi chahiye hota hain 
app.set('views', './views')

app.use('/u1', userRoutes);

app.listen(4000, ()=>{
    console.log('server is running at port 4000')
})