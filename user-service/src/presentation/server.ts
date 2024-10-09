import express,{ Application,Request,Response,NextFunction } from "express";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
import errorHandler from "../_lib/common/error/errrorHandler";
import { dependecies } from "../_boot/dependencies";
import { routes } from "../infrastructure/routes";

console.log(process.env.PORT)
const app:Application = express();
const PORT:number = Number(process.env.PORT) || 4002

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

const allowedOrigins = "http://localhost:5173"
const corsOptions = {
    origin: allowedOrigins,
    methods: ["GET,HEAD,PUT,POST,DELETE"],
    credentials:true
}

app.use(cors(corsOptions));

app.use("/api/user",routes(dependecies));
// app.use("/",routes(dependecies))

app.use("*",(req:Request,res:Response) => {
    res.status(404).json({success:false,status:404,message:"api not found"})
})

app.use(errorHandler)

app.listen(PORT,()=> {
    console.log(`user-service connected to port ${PORT}`);
    
})

export default app