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


// //specific path middle ware 
// //for random 
// app.use("/random" ,(req,res,next)=> {
//     console.log("this is only for random");
//     next();
// });

//middleware for api webpage
//here we have made middleware into function and passed 
let checkToken = (req,res,next) =>{
    let {token} =req.query;
    if(token == "giveaccess"){
        next();
    }else{
        res.send("ACCESS DENIED");
        }
};
//api for tokenstring 
app.get("/api", checkToken ,(req,res) =>{  //here checkToken is run as middleware 
    res.send("hi i am api wala data ")
});

// //utility middleware 
// //logger
// app.use((req,res,next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method , req.hostname ,req.path, req.time);
//     next();
// });

app.get("/" ,(req,res)=>{
    res.send("hi, i am groot");
});

app.get("/random",(req,res)=>{
    res.send("this is a random page ");
});


//404
app.use((req,res,next)=>{
    res.status(404).send("page not found!!!")
})

//error handling 

app.get("/wrong" ,(req,res) => {

});

app.listen(8080, () => {
    console.log("server listening to port 8080");
})