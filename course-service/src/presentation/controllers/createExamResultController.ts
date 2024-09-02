import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const createExamResultController = ( dependencies: IDependencies ) => {
        const { useCases: { createExamResultUseCase, checkResultOfAssessmentAndUserIdUseCase, updateResultUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) => {
        try{
            const data = req.body;
            console.log("🚀 ~ returnasync ~ data:", data)
            const { assessmentRef, userRef } = data;


            if (!assessmentRef || !userRef) {
                throw ErrorResponse.badRequest("data not given")
            }
            const existingResult = await checkResultOfAssessmentAndUserIdUseCase(dependencies).execute(assessmentRef,userRef);

            
            if(existingResult){
                console.log(existingResult?._id,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
                const updatedResult = await updateResultUseCase(dependencies).execute(existingResult?._id.toString(),data);
                console.log("🚀 ~ returnasync ~ updatedResult:", updatedResult)

                if(!updatedResult ) {
                    throw ErrorResponse.notFound("data not updated")
                }
                res.status(200).json({ success: true, data: updatedResult, messge:"data updatedsuccessfully"})
            }else{
                const createResult = await createExamResultUseCase(dependencies).execute(data);
                if( !createResult ) {  
                    throw ErrorResponse.internalError("result is not saved succesfully")
                }
                res.status(200).json({ success: true, data: createResult, message: "exam result saved succesfully"})
            }

            
        }catch(error){
            next(error);
        }
    }
}