const express =require('express')
const mongoose =require('mongoose')
require('dotenv').config();
const app =express()
const auth=require('./routes/auth')
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use('/auth',auth)



const start=async()=>{


    try {
       await mongoose.connect(process.env.MONGO_URI)
       app.listen(3000,()=>{ console.log('server running on port 3000')})

    } catch (error) {
        console.log(error);
    }

}

start()