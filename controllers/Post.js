const Post = require("../models/PostSchema")

exports.post= async(req,res)=>{
    try{
     const {title,desc,img}=req.body
      const newpost = new Post ({title,desc,img})
      const post = await newpost.save();
      res.status(200).json({post})

    }catch(error){
      res.status(500).json({msg:`something went wrong ${error}`})

    }
}