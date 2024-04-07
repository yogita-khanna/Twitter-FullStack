import express from "express";
import dotenv from 'dotenv';
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import tweetRoute from "./routes/tweetRoute.js";
import cors from 'cors';

const app = express();


dotenv.config({
    path : ".env"
})
databaseConnection();

// Middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const corsOption = {
    origin:"http://localhost:3000",
    credentials:true
}
app.use(cors(corsOption));

// route
app.use('/api/v1/user', userRoute);
app.use('/api/v1/tweet', tweetRoute);
// http://localhost:8080/api/v1/user/register

const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log("Server starting at port: "+PORT);
})