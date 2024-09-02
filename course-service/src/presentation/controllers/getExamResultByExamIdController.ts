import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";

export const getExamResultByExamIdController = ( dependencies: IDependencies ) => {
    const { useCases: { getExamResultByExamIdUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) => {
        try{
            const { assessmentRef } = req.params;
            console.log("🚀 ~ returnasync ~ assessmentRef:", assessmentRef)

            
            const examresult = await getExamResultByExamIdUseCase(dependencies).execute(assessmentRef);

            if(!examresult){
                throw new Error("result not found")
            }

            res.status(200).json({ success: true, data: examresult, message: "exam result fetched succesfully"});
        }catch(error){
            next(error)
        }

    }
}