const mongoose=require('mongoose')
const Schema = mongoose.Schema
const userAuthSchema= new Schema({
    fname:{required:true,type:String},
    email:String,
    password:String
})
module.exports = mongoose.model("userAuth",userAuthSchema)