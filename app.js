const express =require('express')
const mongoose =require('mongoose')
require('dotenv').config();
const notFound=require('./middlewares/notFound')
const errorHandlerMiddleware=require('./middlewares/errorHandler')

const app =express()
const auth=require('./routes/auth')
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use('/auth',auth)
app.use(notFound)
app.use(errorHandlerMiddleware)



const start=async()=>{


    try {
       await mongoose.connect(process.env.MONGO_URI)
       app.listen(3000,()=>{ console.log('server running on port 3000')})

    } catch (error) {
        console.log(error);
    }

}

start()