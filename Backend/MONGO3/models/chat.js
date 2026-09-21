const mongoose = require("mongoose");
//schema defination
const chatSchema = new mongoose.Schema({
    from : {
        type: String,
        required :true,
    },
    to : {
        type: String,
        required :true,     
    },
    msg : {
        type: String,
        maxLength : 50,
    },
    created_at : {
        type: Date,
        required :true,
    },
});
//using schema to create chat and exporting 
const Chat = mongoose.model("Chat" , chatSchema);
module.exports = Chat;