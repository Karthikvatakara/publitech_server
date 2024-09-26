import { NextFunction,Request,Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const getCoursesToUserController = (dependencies:IDependencies) => {
    const { useCases: { getCoursesToUserUseCase }} = dependencies;

    return async(req:Request,res:Response,next:NextFunction) => {
        try{
            const { search, category, sort, page = 1, limit = 6 } = req.query

            const params = {
                search,
                category,
                sort,
                page,
                limit
            }
            const courseData = await getCoursesToUserUseCase(dependencies).execute({
                search: search as string,
                category: category as string,
                sort: sort as string,
                page: page as number,
                limit: limit as number
            });

            if(!courseData){
                throw ErrorResponse.notFound("the courseData not found")
            }

            res.status(200).json({ success:true, data:courseData.courses, totalPages: courseData.totalPages, currentPage: courseData.currentPage,  message:" course data retreived succesfully "})
        }catch(error){
            next(error);
        }
    }
}