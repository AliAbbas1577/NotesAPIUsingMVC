const userModel=require("../model/user")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const Key="Notes"
const signup=async (req,res)=>{
    const {username,email,password}=req.body

    try {
        const existingUser=await userModel.findOne({email:email})
        if(existingUser){
            return res.status(400).json({message:"User already exist"})

        }
        else{
        const hashPassword=await bcrypt.hashSync(password,10)
        const result=await userModel.create({
            username:username,
            password:hashPassword,
            Email:email
        })
        const token=jwt.sign({email:result.email,id:result._id},Key)
        res.status(201).json({user:result,token:token})
        }
    } catch (error) {
        res.status(500).json({message:"Signup error"})
    }
}
const signin=async (req,res)=>{
    const {email,password}=req.body
    try {
        const existingUser=await userModel.findOne({Email:email})
        console.log(existingUser)
        if(existingUser){
            const matchPass=await bcrypt.compare(password,existingUser.password)
            if(!matchPass){
                return res.status(400).json({message:"Invalid Credential"})
            }
            else{
                const token=jwt.sign({email:existingUser.Email,id:existingUser._id},Key)
                res.status(201).json({user:existingUser,token:token})
            }
        }
        else{
            return res.status(404).json({message:"User not exist"})
        }
    } catch (error) {
        return res.status(500).json({message:"something wrong"})
    }
}
const default_=(req,res)=>{
    res.send("default post")
}

module.exports={signin,signup,default_}