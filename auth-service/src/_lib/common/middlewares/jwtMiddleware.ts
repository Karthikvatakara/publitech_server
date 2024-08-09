import jwt  from "jsonwebtoken";
import { generateAccessToken } from "../../jwt";
import { Request,Response,NextFunction } from "express";
import { config } from "dotenv"
config();


interface userPayload {
    _id: string,
    email: string,
    role: string
}

declare global {
    namespace Express {
        interface Request {
            user?: userPayload
        }
    }
}

export const jwtMiddleware = async( req:Request,res:Response,next:NextFunction): Promise<void> => {

    try{
        
        const { access_Token,refresh_Token } = req.cookies;
       

    if(!access_Token && !refresh_Token) {
        return next();
    }

    let user;
    if(access_Token) {
        try{
            user = jwt.verify(access_Token,process.env.ACCESS_TOKEN_SECRET!) as userPayload;
            console.log("🚀 ~ jwtMiddleware ~ user:first access token", user)
        }catch(error:any) {
            console.error("invalid access token",error)
        }
    }

    if(!user && refresh_Token) {
        try{
            user = jwt.verify(refresh_Token,process.env.REFRESH_TOKEN_SECRET!)as userPayload;
            if(user){
                const newAccessToken = generateAccessToken(user)
                res.cookie("access_Token",newAccessToken,{
                    httpOnly: true,
                });
                // req.user = user;
                // console.log("🚀 ~ jwtMiddleware ~ user: second refresh token", user)
                // next();
            }
        }catch(error:any){
            console.error("invalid refredh token",error)
        }
    }

    if(user){
        req.user = user;
        next();
    }
    }catch(error){
        console.error("error in jwtmiddleware",error);
        next(error)
    }
    
}