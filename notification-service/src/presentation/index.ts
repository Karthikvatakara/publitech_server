import express,{Application,Request,Response,NextFunction} from "express";
import dotenv from "dotenv";
import cookieparser from "cookie-parser"
dotenv.config();
import { dependencies } from "../_boot/dependencies";
import mongoSanitize from "express-mongo-sanitize"
import cors from 'cors'
import { notificationRoutes } from "../infrastructure/routes/notificationRoutes";

const app:Application = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());

// const allowedOrigins = "http://localhost:5173";
const allowedOrigins = "https://publitech-client.vercel.app";
const corsOptions = {
    origin: allowedOrigins,
    methods: ["GET,HEAD,PUT,POST,DELETE"],
    credentials: true,
}


app.use(cors(corsOptions));

app.use(mongoSanitize());

app.use("/api/notification",notificationRoutes(dependencies));
// app.use("/",notificationRoutes(dependencies))


app.use("*",(req:Request,res:Response) => {
    res.status(404).json({success:false,status:404,message:"Api not found"})
})


const PORT = process.env.PORT || 4002
app.listen(PORT,() => {
    console.log("connected to notiication-service");
})

export default app