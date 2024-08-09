import { Request,Response,NextFunction } from "express";
import { dependecies } from "../../_boot/dependencies";
import { IDependencies } from "../../application/interfaces/IDependency";

export const getallInstructorsController =(dependecies:IDependencies) => {
    const {useCases:{ getallInstructorsUseCase }} = dependecies;

    return async(req:Request,res:Response,next:NextFunction) => {
        try{
            const page = parseInt(req.query.page as string) || 1;
            const limit = parseInt(req.query.limit as string) || 5;
            const status = req.query.status as string;
            const search = req.query.search as string;

            const { instructors, totalPages, totalCount} = await getallInstructorsUseCase(dependecies).execute( page,limit,status,search)

            if(instructors.length === 0){
               return res.status(404).json({ success: false, message:"no instructors found"})
            }
            res.status(200).json({
                success:true,
                data: instructors,
                totalPages,
                totalCount,
                currentPage: page,
                message:"active instrucors"
            });
        }catch(error){
            console.error(error,"error inn the controller")
            next(error);
        }
    }
} 