const express = require("express");
const userModel = require("../models/user.model");
const userRoute = express.Router()


userRoute.post("/register", async (req, res) => {
    try {
      const { fullName, mobileNumber, email, gender } = req.body;
  
      const newUser = new userModel({
        fullName,
        mobileNumber,
        email,
        gender,
      });
  
      await newUser.save();
  
      res.status(201).json({
        message: "User registered successfully",
        user: newUser,
      });
    } catch (error) {
      res.status(400).json({
        message: "Error registering user",
        error: error.message,
      });
    }
  });

userRoute.get("/get-all-users",async(req,res)=>{
    try {
        const users = await userModel.find()
        res.json({
            message:"list of all users",
            status:200,
            users
        })
    } catch (error) {
        res.send(`failed to list users ${error}`)
    }
})



module.exports = userRoute