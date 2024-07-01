//to run backend write-- node ./index.js
import mongoose from 'mongoose'
import express from 'express'
import authRoute from './routes/auth.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import usersRoute from './routes/users.js'
import cookieParser from 'cookie-parser';
import cors from "cors"


const app=express();
const port=4000

mongoose.connect("mongodb+srv://rprajesh12329:aniket2203@cluster0.gjbbbdp.mongodb.net/BookingApp?retryWrites=true&w=majority&appName=Cluster0");


app.get('/',(req,res)=>{
    res.send("Hello all");
})

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api/auth',authRoute);
app.use('/api/hotels',hotelsRoute);
app.use('/api/rooms',roomsRoute);
app.use('/api/users',usersRoute);



app.listen(port,(err)=>{
    if(!err){
        console.log("Server running on port "+port);
    }
    else{
        console.log("Error:"+err);
    }
});