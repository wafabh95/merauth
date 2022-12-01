const mongoose=require('mongoose')
const Schema = mongoose.Schema
const PostSchema= new Schema({
    title:{required:true,type:String},
    desc:String,
    img:String
})
module.exports = mongoose.model("post",PostSchema)