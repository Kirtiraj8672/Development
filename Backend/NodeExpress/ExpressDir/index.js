const express = require("express");
let app= express();



console.dir(app);

let port = 3000;

app.listen(port, () =>{
    console.log(
        `app is listening on port ${port}`
    );
});

// app.use((req,res) => {
//     //console.log(req);
//     console.log("new incoming request ");
//     let code = "<h1>Fruits </h1> <ul> <li>Apple</li> <li>Orange </li> </ul>";
//     res.send(code);
// });

app.get("/",(req ,res) => {
    res.send("Hello i am root ");
});


// app.get("/apple",(req ,res) => {
//     res.send("you contacted apple path ");
// });

// app.get("/orange",(req ,res) => {
//     res.send("you contacted orange path ");
// });

// app.post("/", (req, res) => {
//     res.send("you send a post request to root ");
// });

app.get("/:username/:id",(req ,res) => {
    let {username , id } = req.params; 
    let htmlstr = `<h1>welcome to page of @${username}.</h1>`;
    res.send( htmlstr );
});

app.get("/search",(req,res) =>{
    let {q} = req.query;
    if(!q){
        res.send("<h1> nothing searched </h1>")
    }
    res.send(`this are the search results for query: ${q}`);
});