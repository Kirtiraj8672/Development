// express 
const express = require("express");
const app = express();

//mongoose 
const mongoose = require("mongoose");

main().then( () => {
    console.log("connection successful");
}).catch( (err)=>{
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
//importing chats.js
const Chat = require("./models/chat");

//path
const path = require("path");
app.set("views" , path.join(__dirname,"views"));
app.set("view engine" ,"ejs");

//public (css)

app.use(express.static(path.join(__dirname, "public")));

// URL encoder
app.use(express.urlencoded({extended: true }));

//method over-ride
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

//requiring ExpressError
const ExpressError = require("./ExpressError");



//basic chat creation 
// let chat1 = new Chat ({
//     from: "neha",
//     to: "priya",
//     msg : "send me expam notes",
//     created_at: new Date(),
// })
// chat1.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

//root / home route
app.get("/" , (req,res) =>{
    res.send("root is working ");
});

//index route
app.get("/chats",async (req,res) => {
     try {
        let chats = await Chat.find();
     //console.log(chats);
     res.render("index.ejs" , {chats});
     }catch(err){
        next(err);
     }
});

//new route
app.get("/chats/new" , (req,res) => {
    throw new ExpressError(404, "Page not found");
    res.render("new.ejs");
});

//create route 
app.post("/chats", (req,res) => {
    try{
        let {from , to , msg} = req.body;
        let newChat = new Chat({
            from : from , 
            to: to,
            msg: msg,
            created_at : new Date(),
        });
        newChat.save().then((res)=>{
            console.log("chat was saved ");
        }).catch((err)=>{
            console.log(err);
        });
        res.redirect("/chats");
    }
    catch(err){
        next(err);    
    }
});

function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch(err =>{
            next(err)
        });
    }

}
//NEW show route 
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
    try{
        let { id } = req.params;
        let chat = await Chat.findById(id);

        if (!chat) {
            return next(new ExpressError(404, "Chat not found"));
        }

        res.render("edit.ejs", { chat });
    }catch(err){
        next(err);}l
}));

//edit route 
app.get("/chats/:id/edit" ,async (req,res) => {
    try {
        let {id} = req.params;
        let chat  = await Chat.findById(id);
        res.render("edit.ejs" , {chat});
    }catch(err){
        next(err);
     }
    
});

//update route
app.put("/chats/:id" , async (req, res) => {
    let {msg : newMsg} = req.body;
    let {id } = req.params;
    let updatedChat = await Chat.findByIdAndUpdate(id , {msg : newMsg},
         {runValidator : true , new : true});
    console.log(updatedChat);
    res.redirect("/chats");

});

//delete route 
app.delete("/chats/:id" , async(req,res) => {
    try{
        let {id } = req.params;
        let deletedChat = await Chat.findByIdAndDelete(id);
        console.log(deletedChat);
        res.redirect("/chats");
    }catch(err){
        next(err);
    }
    
})

//error name print 

const handleValidationErr = (err)=>{
    

}
app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name === "ValidationError"){
        console.log("this was a validation error ");
    }
    next(err);
})

//error handeling middleware
app.use((err,req,res,next) => {
    let {status = 500 , message = "Some Error Occured"} = err;
    res.status(status).send(message);
})



app.listen(8080,() =>{
    console.log("Server is listening on port 8080");
});


