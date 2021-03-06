const mongoose = require('mongoose')

const user = new mongoose.Schema({
    title:{
        type:String,
        requried:true,
        enum:["Mr","Mrs","Miss"]
    },
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        require:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        trim:true     
    },
    password:{
        type:String,
        require:true,
    },
    address:{
        street:String,
        city:String,
        pincode:String
    }
},{timestamps:true})

module.exports=mongoose.model("user",user)