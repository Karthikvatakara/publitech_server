import { Request,Response,NextFunction } from "express";
import { generateAccessToken,generateRefreshToken } from "../../_lib/jwt";
import { IDependencies } from "../../application/interfaces/IDepencencies";
import { UserEntity } from "../../domain/entities/userEntity";
import ErrorResponse from "../../_lib/error/ErrorResponse";
import bcrypt from "bcrypt";
import { loginValidation } from "../../_lib/validation/loginValidation";

export const loginController = (dependencies:IDependencies) => {
    const { useCases: {loginUseCase } } = dependencies;

    return async (req:Request,res:Response,next:NextFunction):Promise<void> => {
        const loginCredentials = req.body;
        const { email,password } = loginCredentials;
        try{
            const { error,value } =  loginValidation.validate(loginCredentials)
            if(error){
                throw new Error(error?.message);
            }
            const user: UserEntity | null = await loginUseCase(dependencies).execute(loginCredentials);
         
            if(!user){
                return next(ErrorResponse.unAuthorized("account is not exist"));
            }
            if(user.isBlocked){
                return next(ErrorResponse.unAuthorized("account is blocked"));
            }
            const accessToken = generateAccessToken({
                _id: String(user?._id),
                email: user?.email,
                role: user?.role
            })

            const refreshToken = generateRefreshToken({
                _id: String(user?._id),
                email: user?.email,
                role: user?.role
            })

            res.cookie("access_Token",accessToken,{httpOnly:true});
            res.cookie("refresh_Token",refreshToken,{httpOnly:true})
            res.status(200).json({success:true,data:user,message:"login successfull"})
        }catch(error:any) {
            console.error(error,"error in login controller");
            next(error);
        }
    }
}

