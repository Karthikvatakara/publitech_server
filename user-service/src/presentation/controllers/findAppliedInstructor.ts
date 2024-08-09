import { IDependencies } from "../../application/interfaces/IDependency";
import { Request,Response,NextFunction } from "express";

export const findAppliedInstructorController = (dependencies:IDependencies) => {
    const { useCases: {findAppliedInstructrosUseCase}} = dependencies;

    return async(req:Request,res:Response,next:NextFunction) => {
        try{
            
            const page = parseInt(req.query.page as string) || 1;
            const limit = parseInt(req.query.limit as string) || 5;
            const status = (req.query.status as string) || "all";
            const search = (req.query.search as string) || "";
            const result = await findAppliedInstructrosUseCase(dependencies).execute(page,limit,status,search);

            if(result?.instructors?.length === 0){
                return res.status(200).json({ success: true, data: [], messages: "no instructors found"})
            }

            res.status(200).json({
                success: true,
                data: result?.instructors,
                totalCount: result?.totalCount,
                totalPages: result?.totalPages,
                currentPage: result?.currentPage,
                message:"applied instuctors"})

        }catch(error){
            console.error(error,"error occured in the findAppliedInstructor");
            next(error);
        }
    }
}