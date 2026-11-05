//express
const express = require("express");
const app = express();


app.use(()=>{
    console.log("hi , i am middleware");
});

app.get("/" ,(req,res)=>{
    res.send();
});

app.get(())

app.listen(8080, () => {
    console.log("server listening to port 8080");
})