const mongoose = require('mongoose');



const MyResponses =new mongoose.Schema({
    Name:{
        type:String,required:true
    },
    RollNo:{
        type:Number,required:true,default:000000000
    },
    Question1:{
        type:String
    }
})




const Student=mongoose.model('Student',MyResponses);

module.exports=Student;