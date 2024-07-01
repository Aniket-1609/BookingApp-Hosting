import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

//CREATE
export const createHotel=async(req,res)=>{
    const newHotel=new Hotel(req.body)
    try{
        const savedHotel=await newHotel.save();
        res.status(200).json(savedHotel);
        console.log(savedHotel);
    }
    catch(err){
        res.status(500).json(err)
    }
}


//UPDATE
export const updateHotel=async(req,res)=>{

    try{
        const updatedHotel=await Hotel.findByIdAndUpdate(req.params.id,
            {$set:req.body}, //to set the new values recieved in the request
            {new:true}, //to return the updated value
        );
        res.status(200).json(updatedHotel);
        console.log(updatedHotel);
    }
    catch(err){
        res.status(500).json(err)
    }
    
}

//DELETE
export const deleteHotel=async(req,res)=>{

    try{
        await Hotel.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("Hotel has been deleted successfully");
    }
    catch(err){
        res.status(500).json(err)
    }
    
}

//GET
export const getHotel=async(req,res)=>{

    try{
        const hotel=await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    }
    catch(err){
        res.status(500).json(err)
    }
    
}

//GET ALL
export const getAllHotels=async(req,res)=>{

    const {...others}=req.query;

    try{
        const hotels=await Hotel.find({});

        res.status(200).json(hotels);
    }
    catch(err){
        res.status(500).json(err)
    }
    
}

export const countByCity=async(req,res)=>{

    const cities=req.query.cities.split(",");
    try{
        const list=await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city});
        }))
        res.status(200).json(list);
    }
    catch(err){
        next(err);
    }
    
}
export const countByType=async(req,res)=>{

    
    try{

        const hotelCount =await Hotel.countDocuments({type:"hotel"})
        const apartmentCount =await Hotel.countDocuments({type:"apartment"})
        const resortCount =await Hotel.countDocuments({type:"resort"})
        const villaCount =await Hotel.countDocuments({type:"villa"})
        const cabinCount =await Hotel.countDocuments({type:"cabin"})
        
        res.status(200).json([
            {type:"hotel",count:hotelCount},
            {type:"apartment",count:apartmentCount},
            {type:"resort",count:resortCount},
            {type:"villa",count:villaCount},
            {type:"cabin",count:cabinCount},
        ]);
    }
    catch(err){
        next(err);
    }
    
}

export const getHotelRooms=async(req,res,next)=>{
    try{
        const hotel= await Hotel.findById(req.params.id);
        const list=await Promise.all(
            hotel.rooms.map((room)=>{
            return Room.findById(room);
        }));

        res.status(200).json(list);
    }
    catch(err){
        next(err);
    }
}
