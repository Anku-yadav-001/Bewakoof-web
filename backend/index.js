const express = require("express")
const server = express()
const dotenv = require("dotenv").config()
const PORT = process.env.PORT

server.get("/",(req,res)=>{
    res.send("server is working fine")
})

server.listen(PORT,async()=>{
    try {
        console.log(`server is running on port ${PORT}`)
    } catch (error) {
        console.log(`error occured: ${error}`)
    }
})