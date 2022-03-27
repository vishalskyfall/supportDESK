const express = require('express')
const router = express.Router()
const {registerUser, loginUser,getMe} = require('../controllers/userController')
const { protect} =  require('../middleware/authMiddleware')

// router.post('/',(req,res)=>{
//     res.send('Register Route')
// }) for information


router.post('/',registerUser)
router.post('/login',loginUser)
router.post('/me',protect,getMe)

module.exports=router