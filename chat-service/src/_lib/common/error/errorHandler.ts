import { Request,Response,NextFunction} from "express";

const errorHandler = (error:any,req:Request,res:Response,next:NextFunction) => {
    const statusCode = error.status || 400;
    return res.status(statusCode).json({
        success: false,
        status: error.statusCode,
        message: error.message ||"something went wrong"
    })
}

export default errorHandler;