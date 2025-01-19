const express = require("express")
const dotenv = require("dotenv").config()
const connection = require("./dbconfig/db")
const userRoute = require("./controllers/user.controller")
const server = express()
const PORT = process.env.PORT
const cors = require("cors")
const productRoute = require("./controllers/product.controller")
server.use(cors())
server.use(express.json())
server.get("/",(req,res)=>{
    res.send("server is working fine")
})

server.use("/user",userRoute)
server.use("/product",productRoute)

server.listen(PORT,async()=>{
    try {
        await connection
        console.log("connected to database")
        console.log(`server is running on port ${PORT}`)
    } catch (error) {
        console.log(`error occured: ${error}`)
    }
})