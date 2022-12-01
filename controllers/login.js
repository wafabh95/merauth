const UserAuth = require("../models/userAuth")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { json } = require("express")
require('dotenv').config({path:'../config/.env'})

exports.login = async(req,res)=>{
    try{
        const {email,password}= req.body
        const existuser = await UserAuth.findOne({email:email})
        if(!existuser) res.status(400).json({msg:"wrong email"})

        const validatepassword = await bcrypt.compare(password,existuser.password)
        if(!validatepassword) res.status(400).json({msg:"wrong password"})

        const token= jwt.sign({email,id:UserAuth._id},process.env.secretKey, { expiresIn: '365d' })
        res.status(200).json({msg:"good"},{existuser,token})




    }catch(error){
res.status(500).json({msg:`something went wrong${error}`})
    }
}