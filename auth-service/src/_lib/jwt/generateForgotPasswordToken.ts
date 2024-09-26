import jwt from "jsonwebtoken";

export const generateForgotPasswordToken = (email:string) =>{
    try{
        const forgotPasswordSecret = process.env.FORGOTPASSWORD_ACCESS_TOKEN_SECRET

        if(!forgotPasswordSecret){
            throw new Error("forgot password secrettoken is not provided")
        }
        const payload = { email }
        return jwt.sign(payload,forgotPasswordSecret,{ expiresIn:'10m'})
    }catch(error:any){
        
        throw new Error(error?.message);
    }
}