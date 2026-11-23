//mongoose
const mongoose = require("mongoose");
const { type } = require("node:os");

const {Schema} = mongoose;

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}



//schema 
const userScehma = new Schema ({
    username :{
        type: String,
    },
    email : {
        type: String,
    }
})

const postSchema = new Schema({
    content :{
        type: String,
    },
    likes : {
        type : Number ,
    },
    user : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
})

//make models 
const User = mongoose.model("User" , userScehma);
const Post = mongoose.model("Post", postSchema);


//function to add data and create a post1 

// const addData = async () => {
//     let user1 = new User({
//         username : "Rajesh Kumar",
//         email : "rajesh@gmail.com"
//     });

//     let post1 = new Post({
//         content: "Hello World",
//         likes: 7
//     });

//     post1.user = user1; 

//     await user1.save();
//     await post1.save();
// }

// addData();


//making post for same user rajesh 

// const addData = async () => {
//     let user = await User.findOne({username : "Rajesh Kumar"});

//     let post2 = new Post({
//         content: "Bye Bye :)",
//         likes: 233,
//     });

//     post2.user = user; 

//     await post2.save();
// }

// addData();

//delete a post and user 

const del = async() => {
    Post.findByIdAndDelete("6b0476f9d6b7b4a2a9c7da94");
    User.findById
}