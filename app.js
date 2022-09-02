const express =require('express')
const app =express()
const auth=require('./routes/auth')
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use('/auth',auth)




app.listen(3000,()=>{
    console.log('server running on port 3000');
})
