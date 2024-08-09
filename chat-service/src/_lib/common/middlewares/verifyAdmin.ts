import { Request,Response,NextFunction } from "express";
import ErrorResponse from "../error/errorResponse";
import { User } from "../../../infrastructure/database/mongoDb/models";

export const verifyAdmin = async(req:Request,res:Response,next:NextFunction) => {

    if(!req.user){
        return ErrorResponse.unAuthorized("user is not logged in")
    }

    const user = await User.findById(req.user._id);
    console.log("🚀 ~ verifyAdmin ~ user:", user?.role)

    if(!user){
        return ErrorResponse.notFound("user not found");
    }

    if(user.role !== "admin"){
        return ErrorResponse.unAuthorized("login as admin")
    }
    next();
}