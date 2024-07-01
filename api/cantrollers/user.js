import User from "../models/User.js";



//UPDATE
export const updateUser=async(req,res)=>{

    try{
        const updatedUser=await User.findByIdAndUpdate(req.params.id,
            {$set:req.body}, //to set the new values recieved in the request
            {new:true}, //to return the updated value
        );
        res.status(200).json(updatedUser);
        console.log(updatedUser);
    }
    catch(err){
        res.status(500).json(err)
    }
    
}

//DELETE
export const deleteUser=async(req,res)=>{

    try{
        await User.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("User has been deleted successfully");
    }
    catch(err){
        res.status(500).json(err)
    }
    
}

//GET
export const getUser=async(req,res)=>{

    try{
        const user=await User.findById(req.params.id);
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err)
    }
    
}

//GET ALL
export const getAllUsers=async(req,res)=>{

    try{
        const users=await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json(err)
    }
    
}