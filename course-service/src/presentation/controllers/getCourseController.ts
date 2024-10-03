import { NextFunction,Request,Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import mongoose from "mongoose";

export const getCourseController = (dependencies:IDependencies) => {
    const {useCases: { getSingleCourseUseCase }} = dependencies;

    return async(req:Request,res:Response,next:NextFunction) => {
        try{
            console.log("🚀 ~ returnasync ~ id:haiiiiiiiiiiiiiiiiiiiiii")
            const { id } = req.params;
            console.log("🚀 ~ returnasync ~ id:", id)

            if(!mongoose.Types.ObjectId.isValid(id)) {
                throw new Error("objectid is not valid")
            }
            
            const selected = await getSingleCourseUseCase(dependencies).execute(id);

            res.status(200).json({success:true,data:selected,message:"course retrieved succesfully"})
        }catch(error){
            next(error);
        }
    }
}