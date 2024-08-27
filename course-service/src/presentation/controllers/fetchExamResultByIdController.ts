import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const fetchExamResultByIdController = ( dependencies: IDependencies ) =>{
    const { useCases:{ fetchExamResultByIdUseCase } } = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) => {
        try{
            console.log("inn the fetchexam byid controller")
            const { resultId } = req.params;
            console.log("🚀 ~ returnasync ~ resultId:", resultId)
         
            const fetchResult = await fetchExamResultByIdUseCase(dependencies).execute(resultId);

            if( !fetchResult ) {
                throw ErrorResponse.notFound("ruslt is not found");
            }

            res.status(200).json({ success: true, data: fetchResult, message: "result data fetched succesfully"})
        }catch(error){
            next(error)
        }
    }
}