const express =require('express')
const router =express.Router()


router.post('/',(req,res)=>{
const {name,email,password}=req.body


if( !name|| !email || !password){
return res.status(406).send({success:false,msg:'Name or Email or Password is missing'})
}


//mongoose function
console.log(name,email,password);
res.status(201).send({success:true,msg:'User Created'})


})




module.exports=router