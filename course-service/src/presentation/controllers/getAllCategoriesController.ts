import { NextFunction,Request,Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";

export const getAllCategoryController = (dependencies:IDependencies) => {
    const { useCases: { getAllCategoryUseCase }} = dependencies;

    return async(req:Request,res:Response,next:NextFunction) => {
        try{
            const allCategories = await getAllCategoryUseCase(dependencies).execute();

            if(!allCategories){
                throw new Error("categories not retreived")
            }

            res.status(200).json({success:true,data:allCategories,message:"categories retrieved"})
            
        }catch(error:any){
            next(error);
        }
    }
}