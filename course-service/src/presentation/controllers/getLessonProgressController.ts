import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const getLessonProgressController = (dependencies: IDependencies) => {
    const { useCases: { getLessonProgressUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) => {
        try{
            const { userId, courseId, lessonId } = req.params;
           

            const lessonProgress  = await getLessonProgressUseCase(dependencies).execute(userId,courseId,lessonId)

           

            res.status(200).json({ 
                success: true, 
                data: lessonProgress || {}, 
                message: "lessonProgress updated succesfully"})
                
        }catch(error){
            next(error)
        }
    } 
}