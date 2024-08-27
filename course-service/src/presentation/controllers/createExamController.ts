import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const createExamController = ( dependencies: IDependencies ) => {
    const { useCases: { createExamUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) => {
    
        try{
            console.log(req.body,"in the createexam controller")

            const data = req.body;

            const createExam = await createExamUseCase(dependencies).execute(data);

            if( !createExam ) {
                return ErrorResponse.internalError("exam not created succesfully")
            }

            res.status(200).json({ success: true, data: createExam, message: "exam created succesfully"})
        }catch(error){
            next(error)
        }
    }
}