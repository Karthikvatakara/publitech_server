import express,{ Application,Request,Response,NextFunction } from "express";
import cors from 'cors';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import mongoSanitize from 'express-mongo-sanitize';
import { dependencies } from "../_boot/dependencies";
import { courseRoutes } from "../infrastructure/routes/courseRoutes";
import errorHandler from "../_lib/common/error/errorHandler";
dotenv.config();

const app:Application = express();
const PORT:number = Number(process.env.PORT) || 4004;

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

// const allowedOrigins = "http://localhost:5173";
const allowedOrigins = "https://publitech-client.vercel.app";
const corsOptions = {
    origin: allowedOrigins,
    methods: ["GET,HEAD,PUT,POST,DELETE"],
    credentials:true
}


app.use(cors(corsOptions));
app.use(mongoSanitize());

// app.use("/api/course",courseRoutes(dependencies));
app.use('/',courseRoutes(dependencies));

app.get("/",(req,res) =>{
    console.log("reached home page successfully");
    res.send("home page reached")
})

app.use("*",(req:Request,res:Response) => {
    res.status(404).json({success:false,status:404,message:"Api not found"})
})

app.use(errorHandler);

app.listen(PORT,() => {
    console.log(`connected to post ${PORT}`);
    
})

export default app