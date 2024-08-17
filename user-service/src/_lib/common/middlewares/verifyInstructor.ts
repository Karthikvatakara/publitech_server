import { Request,Response,NextFunction } from "express";
import ErrorResponse from "../error/errorResponse";
import { User } from "../../../infrastructure/database/mongoDb/models/User";

export const verifyInstructor = async(req:Request,res:Response,next:NextFunction) => {
    if(!req.user){
        return ErrorResponse.unAuthorized("user is not logged in")
    }

    const user = await User.findById(req.user._id);

    if(!user){
        return ErrorResponse.unAuthorized("user not exist");
    }
    if(user.isBlocked ){
        return ErrorResponse.unAuthorized("you are blocked")
    }
    if(user.role !== "instructor"){
        return ErrorResponse.unAuthorized("user is not instructor")
    }
    next();
}