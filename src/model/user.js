const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    }

},{timestamps:true});

module.exports=mongoose.model("user",userSchema)
