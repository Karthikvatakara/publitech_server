import express,{ Application,Request,Response } from 'express';
import proxy from 'express-http-proxy';
import {config} from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import morgan from "morgan";

config();

const app: Application = express();

//middlewares 
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));


const allowedOrigins = process.env.CLIENT_URL
const corsOptions = {
    origin: allowedOrigins,
    methods: "GET,HEAD,PUT,POST,POST,DELETE",
    credentials: true,
}

app.use(cors(corsOptions));

const services = {
    auth: process.env.AUTH_SERVICE,
    user: process.env.USER_SERVICE,
    notification: process.env.NOTIFICATION_SERVICE,
    course: process.env.COURSE_SERVICE,
    payment: process.env.PAYMENT_SERVICE,
    chat: process.env.CHAT_SERVICE
}

const routes = [
    {
        context: "/api/auth",
        target: services.auth,
        changeOrigin: true
    },
    {
        context: "/api/user",
        target: services.user,
        changeOrigin: true
    },
    {
        context: "/api/notification",
        target: services.notification,
        changeOrigin: true
    },
    {
        context: "/api/course",
        target: services.course,
        changeOrigin: true
    },
    {
        context: "/api/payment",
        target: services.payment,
        changeOrigin: true
    },
    {
        context: "/api/chat",
        target: services.chat,
        changeOrigin: true
    }
];


//proxy setup for routes
routes.forEach((route) => {
    if (typeof route.target === "string") {
        app.use(route.context,proxy(route.target));
    } else {
        console.warn(`${route.context} is undefined`);
    }
})

const PORT:number = Number(process.env.PORT||8000);

app.listen(PORT,()=>{
    console.log(`api gateway is connected to port${PORT}`);
})


