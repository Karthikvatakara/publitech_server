import { Request,Response,NextFunction } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";

export const createCategoryController = (dependencies:IDependencies) => {
    
    const { useCases: { createCategoryUseCase }} = dependencies;

    return async(req:Request,res:Response,next:NextFunction) => {
        try{
            const data = req.body;
            const { title,imageUrl } = data;

            const smallLetter = title.toLowerCase().trim();
            data.title = smallLetter;

            const newCategory = await createCategoryUseCase(dependencies).execute(data);

            if(!newCategory){
                throw new Error("category not created")
            }

            res.status(200).json({success:true,data:newCategory,message:"category created succesfully"})
        }catch(error){
            next(error);
        }
    }
}