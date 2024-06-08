import { IDependencies } from "../../application/interfaces/IDepencencies";
import { Request,Response,NextFunction } from "express";
import { applyToTeachValidation } from "../../_lib/validation/applyToTeachValidation";
import ErrorResponse from "../../_lib/error/ErrorResponse";
import { UserEntity } from "../../domain/entities/userEntity";

export const applyToTeachController = (dependencies:IDependencies) => {
    const {useCases:{applyToTeahcUseCase,findByEmailUseCase}} = dependencies

    return async(req:Request,res:Response,next:NextFunction) => {
            const applyData = req.body;
            const { email } = applyData;
        try{
            
            const { error,value } = applyToTeachValidation.validate(applyData)

            if(error){
                throw new Error(error?.message);
            }
            
            
            const user: any = await findByEmailUseCase(dependencies).execute(value.email);
            console.log(user);
            
            if(!user){
                return next(ErrorResponse.notFound("user not found"))
            }
            console.log(user,"444444444444444444444444444444");
            
            if(user && user?.role ==="instructor") {
                return next(ErrorResponse.conflict("you are already a instructor"))
            }

            if(user.stage ==="applied"){
                return next(ErrorResponse.conflict("already instructor request submitted"))
            }
            
            const applicationData = await applyToTeahcUseCase(dependencies).execute(value);

            if(!applicationData){
                res.status(500).json({success:false,message:"application submission failed"})
            }

            res.status(200).json({success:true,data:applicationData, message:"application submitted successfullly"})
        }catch(error:any){
            console.error(error,"error in the applytoteach controller")
            next(error);
        }
    }
}