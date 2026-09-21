// to use faker
const { faker } = require('@faker-js/faker');

//to connet to mysql database
const mysql = require('mysql2');

//to use express
const express = require("express");
const app = express();


//to use ejs 
const path = require("path");
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname, "/views"));

//to use method override
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// to parse form data 
app.use(express.urlencoded({ extended: true }));

//sql connection part 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: '9924578762',
});

let  getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(), 
    faker.internet.password(),
    
  ];
};


//inserting new data 
// let q = "INSERT INTO user(id , username, email , password) VALUES ?  ";



// let data =[];
// for (let i = 1 ; i<=100 ;i ++){
//   data.push(getRandomUser()); //100 fake users data 
// }
// let user = [  
//           ["123b","123_newuserb" , "abc@gmail.comb" , "abcb"],
//           ["123c","123_newuserc" , "abc@gmail.comc" , "abcc"],
//         ];



//home route 
app.get("/" , (err, res) => {
  let q = "SELECT count(*) FROM user ";
  try{
    connection.query( q, (err, result) =>{
      if(err) throw err;
      let count = result [0]["count(*)"];
      res.render("home.ejs" , {count});// this will show in web page or screen
    });
  }catch(err){
    console.log(err);
    res.send("some error in DB")
  }
});

//show users routes

app.get("/user", (req,res)=> {
  let q = `SELECT * FROM user`;
  try{
    connection.query(q, (err , users) => {
      if (err) throw err;
      //console.log(users);
      res.render("showusers.ejs" , {users});  
    })
  }catch(err){
    console.log(err);
    res.send("some error in DB");
  }    
});

//edit route
app.get("/user/:id/edit" ,(req,res) => {
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  
  try{
    connection.query(q, (err, result)=>{
      if(err) throw err;
      let user = result[0];
      res.render("edit.ejs" , { user });
    });
  }catch(err){
    console.log(err);
    res.send("Some error in DB ")
  }
  });

  //update(DB) route
  
  app.patch("/user/:id" ,(req,res) => {
  let {id} = req.params;
  let { password: formpass , username: newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;

  try{
    connection.query(q, (err, result)=>{
      if(err) throw err;
      let user = result[0];
      if( formpass != user.password ) {
        res.send("WRONG PASSWORD");
      }else{
        let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        connection.query(q2 ,(err,result)=>{
          if(err) throw err;
          res.redirect("/user");
        })
      }
    });
  }catch(err){
    console.log(err);
    res.send("Some error in DB ")
  }
  });


  //to do things 
  // create form to add a new user to databse 
  //ADD new user 
  // Show the form
app.get("/user/post", (req, res) => {
    res.render("add");
});

// Add a new user
app.post("/user/post/add", (req, res) => {

    let {
        id: newid,
        username,
        email,
        password
    } = req.body;

    let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";

    connection.query(
        q,
        [newid, username, email, password],
        (err, result) => {

            if (err) {
                console.log(err);
                return res.send("Some error in DB");
            }

            console.log(result);
            res.redirect("/user");
        }
    );
});


  //create form to delete a user from dtabase if they enter correct email id and password

  

// Show delete confirmation page
app.get("/user/:id/delete", (req, res) => {
    let { id } = req.params;

    let q = "SELECT * FROM user WHERE id = ?";

    connection.query(q, [id], (err, result) => {
        if (err) {
            console.log(err);
            return res.send("Some error in DB");
        }

        if (result.length === 0) {
            return res.send("User not found");
        }

        let user = result[0];
        res.render("delete.ejs", { user });
    });
});

// Delete user
app.delete("/user/delete/:id", (req, res) => {

    let { id } = req.params;
    let { password, email } = req.body;

    let q = "SELECT * FROM user WHERE id = ?";

    connection.query(q, [id], (err, result) => {

        if (err) {
            console.log(err);
            return res.send("Some error in DB");
        }

        if (result.length === 0) {
            return res.send("User not found");
        }

        let user = result[0];

        if (password !== user.password || email !== user.email) {
            return res.send("Wrong email or password");
        }

        let q1 = "DELETE FROM user WHERE id = ?";

        connection.query(q1, [id], (err, result) => {

            if (err) {
                console.log(err);
                return res.send("Some error in DB");
            }

            res.redirect("/user");
        });
    });
});

app.listen("8080" ,() => {
  console.log("server is listening to port 8080");
});


// try{
// connection.query(q , [data] , (err, result) => {
//     if(err) throw err;
//     console.log(result);
//     console.log(result.length);
//     console.log(result[0]);
//     console.log(result[1]);
// });
// } catch(err){
//     console.log(err);
// };

// connection.end(); //to close connection 