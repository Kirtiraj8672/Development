//express
const express = require("express");
const app = express();


app.use((req,res)=>{
    console.log("hi , i am middleware");
    res.send("Middleware finished");
});

app.get("/" ,(req,res)=>{
    res.send("hi, i am groot");
});

app.get("/random",(req,res)=>{
    res.send("this is a random page ");
});

app.listen(8080, () => {
    console.log("server listening to port 8080");
})