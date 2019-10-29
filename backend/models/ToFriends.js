const mongoose = require('mongoose');

const ToFriendResponses = new mongoose.Schema({
    AuthorName:{
        type:String,required:true
    },
    AuthorRollNo:{
        type:Number,required:true
    },
    FriendRollNo:{
        type:Number,required:true,default:000000000
    },
    Responses:[{
        type:String
    }]


})

const ToFriends=mongoose.model('ToFriends',ToFriendResponses);


module.exports=ToFriends;