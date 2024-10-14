import { Request,Response,NextFunction } from "express";
import ErrorResponse from "../error/errorResponse";
import { User } from "../../../infrastructure/database/mongoDb/models/User";
import { Types } from "mongoose";

export const verifyInstructor = async(req:Request,res:Response,next:NextFunction) => {
    if(!req.user){
        return ErrorResponse.unAuthorized("user is not logged in")
    }
    console.log(req.user._id,"????????????????????????????????");
    
    const user = await User.findById((req.user._id));
    console.log("🚀 ~ verifyInstructor ~ user:dddddddddddddddddddddd", user)

    if(!user){
        return ErrorResponse.unAuthorized("user not exist");
    }
    if(user.isBlocked ){
        return ErrorResponse.unAuthorized("you are blocked");
    }
    if(user.role !== "instructor"){
        return ErrorResponse.unAuthorized("user is not instructor");
    }
    next();
}