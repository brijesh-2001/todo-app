const router= require("express").Router();
const User=require("../models/user");
const bcrypt=require("bcryptjs");

//SIGN UP
router.post("/register", async(req,res)=>{
    try {
       const{email,username,password} =req.body;
       const hashpassword=bcrypt.hashSync(password);
       const user=new User({email,username,password: hashpassword});
       await user.save().then(()=>res.status(200).json({message:"user signed up successfully"}));
    } catch (error) {
    
        res.status(200).json({message:"User already Exists"});
    }
});
//SIGN IN
router.post("/signin", async(req,res)=>{
    try {
       const user=await User.findOne({email:req.body.email});
       if(!user){
        res.status(200).json({message:"Please create the user first"});
       }
       const isPasswordCorrect=bcrypt.compareSync(req.body.password,user.password);
    if(!isPasswordCorrect){
        res.status(200).json({message:"Incorrect  password"});
    }
    const {password,...others}=user._doc;
    res.status(200).json(others);
    } catch (error) {
    
        res.status(200).json({message:"User already Exists"});
    }
});

module.exports=router;