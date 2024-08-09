import { IDependencies } from "../../application/interfaces/IDepencencies";
import { Request,Response,NextFunction } from "express";
import ErrorResponse from "../../_lib/error/ErrorResponse";
import { generateForgotPasswordToken } from "../../_lib/jwt";
import forgotPasswordMailProducer from "../../infrastructure/kafka/producers/forgotPasswordMailProducer";
import { validateEmail } from "../../_lib/validation/emailValidation";

export const forgotPasswordController = (dependencies:IDependencies) => {
    const { useCases: { findByEmailUseCase,}} = dependencies;

    return async(req:Request,res:Response,next:NextFunction) => {
        try{
            
            const { email } = req.body;
            console.log("🚀 ~ returnasync ~ email:", email)

            if(!email){
                throw ErrorResponse.unAuthorized("email is not exist");
            }

            if(!validateEmail(email)){
                throw ErrorResponse.unAuthorized("email is not valid")
            }

            const user = await findByEmailUseCase(dependencies).execute(email);

            if(!user){
                throw ErrorResponse.unAuthorized("email is not found")
            }
            const token = generateForgotPasswordToken(email);

            //send data to notification service
            forgotPasswordMailProducer({email,token})
            
            res.status(200).json({success:true,data:{},message:"message produced"})
        }catch(error:any){
            next(error);
        }
    }
}
