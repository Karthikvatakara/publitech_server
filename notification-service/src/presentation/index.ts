import express,{Application,Request,Response,NextFunction} from "express";
import dotenv from "dotenv";
import cookieparser from "cookie-parser"
dotenv.config();

const app:Application = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());

app.get('/',(req,res) => {
    res.status(200).json({message:"kerala"})
})

app.use("*",(req:Request,res:Response) => {
    res.status(200).json({message:"notification-service connected"})
})


const PORT = process.env.PORT || 4002
app.listen(PORT,() => {
    console.log("connected to notiication-service");
})

export default app