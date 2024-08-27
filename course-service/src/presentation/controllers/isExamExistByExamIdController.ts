import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const isExamExistByExamIdcontroller = ( dependencies: IDependencies ) => {
    const { useCases: { isExamExistByExamIdUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) => {
        try{
            const { examId } = req.params;
            console.log("🚀 ~ returnasync ~ examId:", examId)

            const isExamExist = await isExamExistByExamIdUseCase(dependencies).execute(examId);

            if(!isExamExist){
                throw ErrorResponse.notFound("exam not exist");
            }

            res.status(200).json({ success: true, data: isExamExist, message: "exam fetched succesfully"})
        }catch(error){
            next(error);
        }
    }
}