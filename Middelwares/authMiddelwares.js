const jwt = require("jsonwebtoken")
require('dotenv').config({path:'../config/.env'})

exports.authMiddelwares = async(req,res,next)=>{
    try{
      const token = req.header("auth-token")
    
      if(!token) res.status(401).json({msg:"you are not authorized"})

      const verifytoken = jwt.verify(token,process.env.secretKey)
      if(!verifytoken) res.status(401).json({msg:"wrong token"})
      next()
    }catch(error){
        res.status(500).json({msg:`something went wrong${error}`})
    }
}