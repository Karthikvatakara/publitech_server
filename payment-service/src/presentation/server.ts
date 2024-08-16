import express,{ Application,Request,Response,NextFunction } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser'
import mongoSanitize from 'express-mongo-sanitize';
import cors from 'cors';
// import { errorHandler } from '../_lib/error';
import errorHandler from '../_lib/common/error/errorHandler';
import { paymentRoutes } from '../infrastructure/routes/paymentRoutes';
import { dependencies } from '../_boot/dependencies';
import bodyParser from 'body-parser';


const app:Application = express();
const PORT:number = Number(process.env.PORT) || 4005;

app.use((req, res, next) => {
    if (req.originalUrl === '/webhook') {
      next();
    } else {
      express.json()(req, res, next);
    }
  });

app.use(express.urlencoded({ extended:true }));
app.use(cookieParser());

const allowedOrigins = "http://localhost:5173"
const corsOptions = {
    origin: allowedOrigins,
    methods: ["GET","HEAD","POST","PUT","DELETE"],
    credentials : true,
}

app.use(cors(corsOptions));

app.use(mongoSanitize());



app.use("/",paymentRoutes(dependencies));



app.use("*",(req:Request,res:Response) => {
    res.status(404).json({success:false,status:404,message:"Api not found"})
})

app.use(errorHandler);

app.listen(PORT,() => {
    console.log(`connected to payment-service succesfully ${PORT}`);
})

export default app;