import { dependencies } from "../../_boot/dependencies";
import { IDependencies } from "../../application/interfaces/IDepencencies";
import { Request,Response,NextFunction } from "express";
import { UserEntity } from "../../domain/entities/userEntity";
import ErrorResponse from "../../_lib/error/ErrorResponse";

export const getUserController = (dependencies:IDependencies) => {
    const {useCases:{ findUserByIdUseCase }} = dependencies;

    return async(req:Request,res:Response,next:NextFunction) => {
        try{
            console.log("getuercontrolller 11111111111111111111111",req.user);
            if(!req.user) {
                throw new Error("Authentication required. no user provided")
            }

            const result = await findUserByIdUseCase(dependencies).execute(req.user._id)
            
            if(!result){
                throw new Error("user not found")
            }
            if(result.isBlocked) {
                throw new Error("user is blocked")
            }
                console.log("🚀 ~ returnasync ~ result:rrrrrrrrrrrrrrrrrrrr", result)
            res.status(200).json({success:true,data:result,message:"user found"})
        }catch(error:any){
            console.error("error occured in the getuser controller");
            next(error)
        }
    }
}