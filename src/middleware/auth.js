const jwt=require("jsonwebtoken")
const Key="Notes"
const auth=(req,res,next)=>{
    
    try {
        let token=req.headers.authorization
        if(token)
        {
            token=token.split(" ")[1]
            let user=jwt.verify(token,Key)
            req.userId=user.userId
        }
        else{
            res.status(401).json({message:"unauthorized user"})
        }
        next()
        
    } catch (error) {
        
        res.status(401).json({message:"unauthorized user"})
    }

}
module.exports=auth