//express
const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

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
        throw new ExpressError(401, "ACCESS DENIED");
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


//error handling

app.get("/err" ,(req,res) => {
    abcd= tytyty;
});



//error class for admin route 

app.get("/admin" ,(req,res)=>{
    throw new ExpressError(403, "access to admin is forbidden");
})

app.use((err,req,res,next)=>{
    let{status = 500 , message} = err;
    res.status(status).send(message);
})








// app.use((err,req,res,next)=>{
//     console.log("-----------------------ERROR-2 MIDDLE WARE ----------------------");
//     next(err);
// })

// //404
// app.use((req,res,next)=>{
//     res.status(404).send("page not found!!!")
// })



app.listen(8080, () => {
    console.log("server listening to port 8080");
})