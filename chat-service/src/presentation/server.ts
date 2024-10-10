import express,{ Request,Response,NextFunction, Application } from "express";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import mongoSanitize from 'express-mongo-sanitize';
import cors from 'cors';
import errorHandler from "../_lib/common/error/errorHandler";
import { chatRoutes } from "../infrastructure/routes/chatRoutes";
import { dependencies } from "../_boot/dependencies";
import connectSocketIo from "../infrastructure/socket/connection";
import http from "http";
dotenv.config();

const app: Application = express();
const port: number = Number(process.env.PORT) || 4006;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// const allowedOrigins = "http://localhost:5173";
const allowedOrigins = "https://publitech-client.vercel.app";
const corsOptions = {
    origin: allowedOrigins,
    methods: ["GET,HEAD,PUT,POST,DELETE"],
    Credentials : true
}

app.use(cors(corsOptions));

const server = http.createServer(app);

connectSocketIo(server);

app.use(mongoSanitize());

app.use("/api/chat",chatRoutes(dependencies));
// app.use("/",chatRoutes(dependencies))

app.use("*",( req: Request, res: Response ) => {
    res.status(404).json({success:false,status:404,message:"Api not found"})
})

app.use(errorHandler)

server.listen(port, () => {
    console.log(`connected to the port ${port}`);
})

export default app;
