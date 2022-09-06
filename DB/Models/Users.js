const mongoose =require('mongoose')



const UserSchema= new mongoose.Schema({
name:{
    type:String,
    required:[true,'Please provide your name'],
    maxlength:[20,'name cannot be more than 20 characters']
},
email:{
    type:String,
    required:[true,'please provide email']
},
password:{
    type:String,
required:[true,'no password provided']
}
})


module.exports=mongoose.model('User',UserSchema)


