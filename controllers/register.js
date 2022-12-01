const bcrypt = require ("bcryptjs")
const UserAuth = require("../models/userAuth")
const jwt = require("jsonwebtoken")
require('dotenv').config({path:'../config/.env'})




exports.register = async (req,res)=>{
    try{
        const {fname,email,password} = req.body
        const existuser = await UserAuth.findOne({email:email})
        if (existuser) res.status(400).json({msg:'you have an account'})
        const cryptpassword = await bcrypt.hash(password,12)
        const newuser = new UserAuth({fname,email,password:cryptpassword})
        const user = await newuser.save()
        const token = jwt.sign({email,id:UserAuth._id},process.env.secretKey,{ expiresIn: '365d' })
        res.status(200).json({user,token})

    }catch(error){
        res.status(500).json({msg:'something went wrong'})

    }
}