import { IDependencies } from "../../application/interfaces/IDependency";
import { Request,Response,NextFunction } from "express";
import { course } from "../../infrastructure/database/mongodb/models";

export const getCompleteCoursesController = ( dependencies:IDependencies ) => {

        const { useCases: { getCompleteCourses }} = dependencies;

    return async(req:Request,res:Response,next:NextFunction) => {
        try{
            const page = parseInt(req.query.page as string) || 1;
            const limit = parseInt(req.query.limit as string) || 5;
            const search = req.query.search as string || "";
            const filter = req.query.filter as string || "";
            const sort = req.query.sort as string || "";

            const { courses, total } = await getCompleteCourses(dependencies).execute(page,limit,search,filter,sort);


            res.status(200).json({ success: true,data: courses, total, page, limit, message: "all course details retrieved succesfully"})
        }catch(error){
            next(error)
        }
    }
}