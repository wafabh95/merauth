const mongoose = require('mongoose')
require('dotenv').config({path:'./config/.env'})
const MONGO_URI=process.env.MONGO_URI
const connectDb=()=>{
    mongoose.connect(MONGO_URI,(err)=>{
        if (err) throw err
        else console.log("database is connected")
    })
}
module.exports= connectDb