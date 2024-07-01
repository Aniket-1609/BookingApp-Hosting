import Room from '../models/Room.js'
import {createError} from '../utils/error.js'
import Hotel from '../models/Hotel.js'

//CREATE ROOM
export const createRoom= async(req,res,next)=> {
    
    const hotelId=req.params.hotelid;
    const newRoom=new Room(req.body);

    try{
        const savedRoom =await newRoom.save();
        try{
            await Hotel.findByIdAndUpdate(hotelId,{
                $push:{rooms:savedRoom._id},
            });
        }
        catch(err){
            next(err);
        }
        res.status(200).json(savedRoom);
    }
    catch(err){
        next(err);
    }
}

//UPDATE
export const updateRoom=async(req,res)=>{

    try{
        const updatedRoom=await Room.findByIdAndUpdate(req.params.id,
        {$set:req.body}, //to set the new values recieved in the request
            {new:true}, //to return the updated value
        );
        res.status(200).json(updatedRoom);
        console.log(updatedRoom);
    }
    catch(err){
        res.status(500).json(err)
    }
    
}
export const updateRoomAvailability=async(req,res)=>{

    try{
        await Room.updateOne(
            {"roomNumbers._id":req.params.id},
            {
                $push:{
                    "roomNumbers.$.unavailableDates":req.body.dates
                },
            }
        )
        res.status(200).json("Room status has been updated");
    }
    catch(err){
        res.status(500).json(err)
    }
    
}

//DELETE
export const deleteRoom=async(req,res,next)=>{
    
    const hotelId=req.params.hotelid;
    try{
        await Room.findByIdAndDelete(req.params.id);
        try{
            await Hotel.findByIdAndUpdate(hotelId,{
                $pull:{rooms:req.params.id},
            });
        }
        catch(err){
            next(err);
        }
        res.status(200).json("room has been deleted successfully");
    }
    catch(err){
        next(err);
    }
    
}

//GET
export const getRoom=async(req,res)=>{

    try{
        const room=await Room.findById(req.params.id);
        res.status(200).json(room);
    }
    catch(err){
        res.status(500).json(err)
    }
    
}

//GET ALL
export const getAllRooms=async(req,res)=>{

    try{
        const rooms=await Room.find();
        res.status(200).json(rooms);
    }
    catch(err){
        res.status(500).json(err);
    }
}
    