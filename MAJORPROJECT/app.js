//express
const express = require("express");
const app = express();

//mongoose
const mongoose = require("mongoose");

app.get("/" , (req,res) => {
    res.send("hi i am groot");
})

app.listen(8080 , () => {
    console.log("server is listing to port 8080");
})

