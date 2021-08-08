const mongoose = require('mongoose')
const dotenv = require('dotenv')
const users = require('./data/users.js')
const products = require('./data/products.js')
const User = require('./models/userModel.js')
const Address = require('./models/addressModel.js')
const Product  = require('./models/productModel.js')
const connectDB = require('./config/db.js')

dotenv.config()
connectDB()

const importData = async () =>{
    try{
        await connectDB();
       
        await Product.deleteMany()
        await Address.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(product =>{
            return {...product , user:adminUser}
        })

        await Product.insertMany(sampleProducts)
        console.log('Data Imported')
        process.exit()
    }catch(error){
        console.error(`${error}`)
        process.exit(1)
    }
}


const destroyData = async () =>{
    try{
        await connectDB();
        await Product.deleteMany()
        await Address.deleteMany()
        await User.deleteMany()

        
        console.log('Data Destroyed')
        process.exit()
    }catch(error){
        console.error(`${error}`)
        process.exit(1)
    }
}

if(process.argv[2] ==='-d'){
    destroyData()
}else{
    importData()
}