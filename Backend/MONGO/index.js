const mongoose = require("mongoose");


main().then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {

    await mongoose.connect("mongodb://127.0.0.1:27017/test");    
    
}
//how to create a schema 
const userSchema = new mongoose.Schema({
    name: String,
    email: String, 
    age: Number,
});

//inserting a user in a collection 
const User = mongoose.model("User" , userSchema);
// const Employee = mongoose.model("Employee" , userSchema);


//inserting user in the collection 

// const user1 = new User ({
//     name: "Adam" , 
//     email : "adam@yahoo.in",
//     age: 48,
// });


// const user2 = new User ({
//     name: "eve" , 
//     email : "eve@yahoo.in",
//     age: 48,
// });
 
// //to save a particular user use this 
// user2.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log("Catch error");
// });


//insert many 

// User.insertMany([
//     { name : "Tony", email : "tony@gmail.com" , age : 50 },
//     { name : "Peter", email : "peter@gmail.com" , age : 30 },
//     { name : "Bruce", email : "bruce@gmail.com" , age : 47 },

// ]).then((res)=> {
//     console.log(res);
// });


// find 

// User.find({}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

//find with condition 
// User.find({ age : {$gt : 48}}).then((res) => {
//     console.log(res[0].name);
// }).catch((err) => {
//     console.log(err);
// });


//findOne 

// User.findOne({age : {$gt : 47}}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

//findOne with condition 

// User.findOne({ _id: "6aaab9a59138405c0baf6172"}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

//findById

// User.findById("6aaab9a59138405c0baf6172").then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

//updateOne

// User.updateOne({name : "Bruce"}, {age : 49}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

//updateMany

// User.updateMany({age : {$gt : 48 }}, {age : 55}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

//findOneAndUpdate()
//by setting new as true the update value will be diplay .
// User.findOneAndUpdate({name : "Bruce"}, {age : 35} , {new: true}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

//findByIdAndUpdate()

// User.findByIdAndUpdate("6aaab9a59138405c0baf6172", {age : 100} , {new: true}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

//deleteOne()

// User.deleteOne({ name : "Bruce"}).then((res)=>{
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

//deleteMany()

// User.deleteMany({ age : 48}).then((res)=>{
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

//findByIdAndDelete()

// User.findByIdAndDelete("6aaab9a59138405c0baf6171").then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

//findOneAndDelete()

// User.findOneAndDelete({name : "Tony"}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });