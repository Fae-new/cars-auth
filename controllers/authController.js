const User = require('../DB/Models/Users')
const  {uid}= require('uid')
const asyncWrapper =require('../middlewares/asyncWrapper')
const { createError } = require('../errors/customError')



const createUser= asyncWrapper( async(req,res,next)=>{
req.body._id=uid(24)

        const user=  await User.find({email:req.body.email})

            if(user.length!==0){
                return next(createError('user already exists',401))
                }
          await User.create(req.body)
        res.status(201).json({success:true,user:req.body})
    
    })

const getUser=  asyncWrapper( async(req,res,next)=>{


  const user=  await User.find({email:req.body.email})
  if(user.length<1){
 
  return next(createError('email not found',404))
  }
  else{
    const user=  await User.find({email:req.body.email,password:req.body.password})
    if(user.length<1){
       
  return next(createError('incorrect password',404))
        }
  }


    res.status(200).json({success:true,user:{uid:user[0]._id,name:user[0].name,email:user[0].email}})




})



    module.exports={createUser,getUser}

