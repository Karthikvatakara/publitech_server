import mongoose,{ mongo } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export default async() => {
    try{
        const mongoUrl = process.env.MONGO_URL

        if(!mongoUrl){
            throw new Error("mongodb connection string is not provided in env");
        }

        await mongoose.connect(mongoUrl.trim());
        console.log("mongodb connected succesfully");
        
    }catch(error:any){
        console.error('db connection failed',error);
        console.error(error?.message);
        process.exit(1);
    }
}

