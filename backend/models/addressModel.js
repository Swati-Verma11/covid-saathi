const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    user:{
        type : mongoose.Schema.Types.ObjectId,
        required : true ,
        ref : 'User'
    },
    productAddress:{
        address : {type: String , required : true },
        city : {type : String , required : true },
        pinCode : {type: Number , required : true},
        country : {type : String , required : true , default : 'India'}

    }

},{
    timestamps : true
})

const Address =  mongoose.model('Address' , addressSchema)

module.exports = Address