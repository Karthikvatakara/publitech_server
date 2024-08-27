import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const createExamResultController = ( dependencies: IDependencies ) => {
        const { useCases: { createExamResultUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) => {
        try{
            const data = req.body;

            const createResult = await createExamResultUseCase(dependencies).execute(data);

            if( !createResult ) {  
                throw ErrorResponse.internalError("result is not saved succesfully")
            }

            res.status(200).json({ success: true, data: createResult, message: "exam result saved succesfully"})
        }catch(error){
            next(error);
        }
    }
}