import { Request,Response,NextFunction } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const updateCategoryController = (dependencies:IDependencies) => {
    const { useCases: { updateCategoryUseCase }} = dependencies;

    return async(req:Request,res:Response,next:NextFunction) => {
        try{
            const { id } = req.params;

            const { title,imageUrl } = req.body;
            
            const updated = await updateCategoryUseCase(dependencies).execute(id,req.body)

            if(!updated){
                throw ErrorResponse.unAuthorized("category not updated")
            }

            res.status(200).json({success:true,data:updated,message:"category updatd succesfully"})
        }catch(error:any){
            next(error)
        }
    }
}