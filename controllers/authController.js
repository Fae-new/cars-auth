const User = require('../DB/Models/Users')
const  {uid}= require('uid')



const createUser= async(req,res)=>{
req.body._id=uid(24)

    try {
        const user=  await User.find({email:req.body.email})

            if(user.length!==0){
                return res.status(404).json({success:false,msg:`user already exists `})
                }
          await User.create(req.body)
        res.status(201).json({success:true,user:req.body})
    } catch (error) {
        res.status(401).json(error.errors)
        console.log(error)
    }

    }

const getUser=async(req,res)=>{


try {
  const user=  await User.find({email:req.body.email})
  if(user.length<1){
  return res.status(404).json({success:false,msg:`email not found`})
  }
  else{
    const user=  await User.find({email:req.body.email,password:req.body.password})
    if(user.length<1){
        return res.status(404).json({success:false,msg:`passord is incorrect`})
        }
  }


    res.status(200).json({success:true,user:{uid:user[0]._id,name:user[0].name,email:user[0].email}})


} catch (error) {

      res.status(401).json(error.errors)
}

}



    module.exports={createUser,getUser}

