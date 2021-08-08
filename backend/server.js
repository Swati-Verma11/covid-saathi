const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db.js')
const productRoutes = require('./routes/productRoutes.js')
dotenv.config()
connectDB()
const app = express()
const {notFound , errorHandler} = require('./middleware/errorMiddleware.js')
app.get('/' , (req , res) => {
    res.send('API is running..')
})

app.use('/api/products' , productRoutes)

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000 
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV } mode on port ${PORT}`))