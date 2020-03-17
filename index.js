let PORT = 80;
//--------------- Going to start -----------------//


const express = require("express");
const app = express();
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    console.log("started")
})
app.post('/register/new/user',(req,res)=>{
    let {email,password,number} = req.body;
    console.log(email,password,number)
})
app.listen(PORT,()=>{
    console.log("\nPORT Started at - PORT = " + PORT);
});