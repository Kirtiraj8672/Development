//express
const express = require("express");
const app = express();


// app.use((req,res,next)=>{
//     // let{ query } = req.query;
//     // console.log(query);
//     console.log("hi , i am 1st middleware");
//     // res.send("Middleware finished"); 
//     next();
// });

// app.use((req,res,next)=>{
//     console.log("hi , i am 2nd middleware");
//     next();
// });

//utility middleware 
//logger
app.use((req,res,next)=>{
    req.time = new Date(Date.now()).toString();
    console.log(req.method , req.hostname ,req.path, req.time);
    next();
});


//specific path middle ware 
//for random 
app.use("/random" ,(req,res,next)=> {
    console.log("this is only for random");
    next();
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