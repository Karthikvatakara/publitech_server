import { NextFunction,Request,Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";

export const getAllAvailableCategoryController =  (dependencies:IDependencies) => {
    const { useCases:{ getAllAvailableCategoryUseCase }} = dependencies;

    return async(req:Request,res:Response,next:NextFunction) => {
        try{
            const availableCategory = await getAllAvailableCategoryUseCase(dependencies).execute();

            if(!availableCategory){
                throw new Error("categories not retrieved")
            }

            res.status(200).json({success:true,data:availableCategory,message:"available category retrieved"})
        }catch(error:any){
            next(error)
        }
    }
}