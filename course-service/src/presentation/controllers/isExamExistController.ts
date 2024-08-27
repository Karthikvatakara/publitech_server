import { NextFunction, Request, Response } from "express";
import { dependencies } from "../../_boot/dependencies"
import { IDependencies } from "../../application/interfaces/IDependency"
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const isExamExistController = ( dependencies: IDependencies ) => {
    const { useCases: { isExamExistUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) => {
        try{
            const { courseId } = req.params;
            console.log("🚀 ~ returnasync ~ courseId:", courseId)

            const isExist = await isExamExistUseCase(dependencies).execute(courseId);

            if( !isExist ) {
                throw ErrorResponse.notFound("the exam is not exist")
            }

            res.status(200).json({succes: true, data: isExist, message: "exam isExist fetched succesfully"})
        }catch(error){
            next(error)
        }
    }
}