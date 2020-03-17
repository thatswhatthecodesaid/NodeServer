let PORT = 80;
//--------------- Going to start -----------------//


const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    console.log("started")
})
app.listen(PORT,()=>{
    console.log("\nPORT Started at - PORT = " + PORT);
});