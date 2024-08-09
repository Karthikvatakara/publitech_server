import { IDependencies } from "../../application/interfaces/IDependency"
import ErrorResponse from "../../_lib/common/error/ErrorResponse";
import { Request,Response,NextFunction } from "express";

export const getAllCourseOfInstructorController = ( dependencies: IDependencies) => {
    const { useCases: { getAllCourseOfInsructorUseCase } } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {
        try{
            if( !req.user) {
                throw ErrorResponse.unAuthorized("instructor is not logged")
            }

            const page = parseInt(req.query.page as string) || 1;
            const limit = parseInt(req.query.limit as string) || 6;
            const search = req.query.search as string || '';
            const stage = req.query.stage as string || '';

            const getAllCourse = await getAllCourseOfInsructorUseCase( dependencies ).execute(
                req.user._id,
                page,
                limit,
                search,
                stage,
            )

            if( !getAllCourse ) {
                throw ErrorResponse.notFound("courses not found")
            }

            res.status(200).json({
                success: true,
                data: getAllCourse.courses,
                totalPages: getAllCourse.totalPages,
                currentPage: getAllCourse.currentPage,
                message: "courses retrieved succesfully"
            })
        }catch(error){
            next(error)
        }
    }
}