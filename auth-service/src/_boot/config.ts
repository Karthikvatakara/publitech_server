import mongoose,{ mongo } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default async() => {
    try{
        const mongoUrl = process.env.MONGO_URL

        if(!mongoUrl) {
            throw new Error("Mongodb conncetion string is not provided in env")
        }

        await mongoose.connect(mongoUrl.trim());
        console.log("mongodb succesfully connected");
        
    }catch(error:any){
        console.error('db connection failed');
        console.error(error?.message);
        process.exit(1)
    }
}