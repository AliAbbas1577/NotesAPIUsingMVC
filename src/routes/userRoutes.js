const express=require("express")
const { signin, signup,default_ } = require("../controllers/userController")
const userRouter = express.Router()

userRouter.post("/signup",signup)
userRouter.post("/signin",signin)
userRouter.get("/",default_)

module.exports=userRouter