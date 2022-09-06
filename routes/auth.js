const express =require('express')
const router =express.Router()
const {createUser,getUser}=require('../controllers/authController')


router.get('/',getUser)
router.post('/',createUser)




module.exports=router