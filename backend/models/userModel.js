const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name :{
        type:String,
        required : true 
    },
    phone :{
        type : Number,
        required : true ,
        unique : true
    },
    password:{
        type : String,
        required : true
    }

},{
    timestamps : true
})

const User =  mongoose.model('User' , userSchema)

module.exports = User