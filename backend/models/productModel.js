const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    user:{
        type : mongoose.Schema.Types.ObjectId,
        required : true ,
        ref : 'User'
    },
    type:{
        type:String,
        required : true 
    },
    image :{
        type : String,
        required : true ,
        
    },
    description:{
        type : String,
        required : true
    },
    price:{
        type :Number ,
        required : true ,
        default : 0
    },
    countinStock:{
        type : Number ,
        required : true ,
        default : 0
    },
    availability:{
        type: Boolean,
        required : true,
        default :1
    }


},{
    timestamps : true
})

const Product =  mongoose.model('Product' , productSchema)

module.exports = Product