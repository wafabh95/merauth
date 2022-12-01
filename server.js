const express = require('express')
const app = express()
app.use(express.json())
const connectDb = require("./config/connectDb")
const port = process.env.PORT
connectDb()
app.use('/',(require("./routes/userRoutes")))
app.use('/posts',(require("./routes/postRoutes")))
app.listen(port,()=>{
    console.log("database is connected" +port)
})
