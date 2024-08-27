import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const updateExamController = ( dependencies: IDependencies ) => {
    const { useCases: { updateExamUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) => {
        try{
            const { examId } = req.params;
            const data = req.body;

            const updatedExam = await updateExamUseCase(dependencies).execute(examId, data);

            if(!updatedExam){
                throw ErrorResponse.notFound("the exam is not updated")
            }

            res.status(200).json({ success: true, data: updatedExam, message:" exam updated succesfully"})
        }catch(error){
            next(error);
        }
    }
}