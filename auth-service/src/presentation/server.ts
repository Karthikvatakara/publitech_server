import express,{Application,Request,Response,NextFunction} from 'express';
import dotenv from 'dotenv';
import errorHandler from '../_lib/error/errorHandler';
import cookieParser from 'cookie-parser';
import { authRoutes } from '../infrastructure/routes/authRoutes';
import { dependencies } from '../_boot/dependencies';
import mongoSanitize from "express-mongo-sanitize"
import cors from 'cors'
dotenv.config()  

const app:Application = express();
const PORT: number = Number(process.env.PORT) || 4001;



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const allowedOrigins = "http://localhost:5173"
const corsOptions = {
    origin: allowedOrigins,
    methods: ["GET,HEAD,PUT,POST,DELETE"],
    credentials: true,
}


app.use(cors(corsOptions));

app.use(mongoSanitize());

app.use("/api/auth",authRoutes(dependencies));
// app.use('/',authRoutes(dependencies));

app.use("*",(req:Request,res:Response) => {
    res.status(404).json({success:false,status:404,message:"Api not found"})
})

app.use(errorHandler)

app.listen(PORT,()=> {
    console.log(`connected to auth service succesfully ${PORT}`);
})

export default app