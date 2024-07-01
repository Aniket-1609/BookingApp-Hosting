import bcrypt from "bcryptjs";
import User from "../models/User.js"
import jwt from "jsonwebtoken"

//REGISTER FUNCTION
export const register=async(req,res)=>{
    try{
        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(req.body.password,salt);


        const newUser=new User({
            ...req.body,
            password:hash,
        })

        await newUser.save();
        res.status(200).json(newUser);
    }
    catch(err){
        res.status(500).json(err);
    }
}

//LOGIN FUNCTION
export const login=async(req,res)=>{
    try{
        const user=await User.findOne({username:req.body.username});
        if(!user){
            res.status(500).json("User not found");
        }

        const isPasswordCorrect=await bcrypt.compare(
            req.body.password,
            user.password
        );

        if(!isPasswordCorrect){
            res.status(404).json("Wrong password");
        }

        const {password,isAdmin,...otherDetails}=user._doc;

        const token=jwt.sign({id:user._id,isAdmin:user.isAdmin},"sdfsdfs");
        
        res.cookie("access_token",token,{
            httpOnly:true,
        })
        .status(200)
        .json({details:{...otherDetails},isAdmin});


        
    }
    catch(err){
        res.status(301).json(err);
    }
}