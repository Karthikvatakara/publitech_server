import { IDependencies } from "../../application/interfaces/IDepencencies";
import { Request,Response,NextFunction } from "express";
import ErrorResponse from "../../_lib/error/ErrorResponse";
import { verifyForgotPassword } from "../../_lib/jwt";
import { hashPassword } from "../../_lib/bcrypt/hashPassword";
import { updatePassword } from "../../infrastructure/database/mongoDb/repositories";
import { loginValidation } from "../../_lib/validation/loginValidation";

export const updatePsswordController = (dependencies:IDependencies) =>{
    const { useCases: { updatePasswordUseCase,findByEmailUseCase }} = dependencies;
    return async(req:Request,res:Response,next:NextFunction) => {

        try{
            const { param,password } = req.body;
            console.log(req.body);
            
            if(!param || !password) {
                throw ErrorResponse.badRequest("the given data is not suitable")
            }

            const decoded = await verifyForgotPassword(param);
            const email = decoded.email;
            console.log("🚀 ~ returnasync ~ email:", email)
            
            //validating the password
            const { error,value } = loginValidation.validate({email,password})
            if(error){
                throw new Error(error?.message);
            }

            const user = await findByEmailUseCase(dependencies).execute(email);
            if(!user){
                throw ErrorResponse.unAuthorized("user not found")
            }
            console.log("🚀 ~ returnasync ~ user:nmnmnmnmnnmmnuser", user)
            
            const hashedPassword = await hashPassword(password);
            console.log("🚀 ~ returnasync ~ hashedPassword:hashedPassword", hashedPassword)
            
            const updatedPassword = await updatePasswordUseCase(dependencies).execute(email, hashedPassword);
            console.log("🚀 ~ returnasync ~ updatedPassword:", updatedPassword)

            if(!updatePassword){
                throw ErrorResponse.unAuthorized("password not updated correclty")
            }
            if(updatedPassword){
                res.status(200).json({success:true,data:updatePassword,message:"password updated succesfully"})
            }
        }catch(error:any){
            next(error)
        }
    }
}