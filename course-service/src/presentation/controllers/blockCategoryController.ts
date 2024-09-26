import { Request,Response,NextFunction } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const blockCategoryController = (dependencies:IDependencies) => {
    const { useCases:{ blockCategoryUseCase }} = dependencies;

    return async(req:Request,res:Response,next:NextFunction) => {
        try{
            
            const { id,action } = req.body;

            if(!id || !action) {
                throw ErrorResponse.forbidden("category or action is not provided")
            }

            const updated = await blockCategoryUseCase(dependencies).execute(id,action)

            if(!updated){
                throw ErrorResponse.internalError("category not updated")
            }

            res.status(200).json({success:true,data:updated,message:"status updated succesfully"})
        }catch(error:any){
            next(error)
        }
    }
}