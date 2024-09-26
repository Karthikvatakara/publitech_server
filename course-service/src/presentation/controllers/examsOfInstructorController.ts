import { NextFunction, Response, Request } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const examsOfInstructorController = ( dependencies: IDependencies ) => {
    const { useCases: { examsOfInstructorUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction) => {
        try{
            const instructorId = req.user?._id;
            console.log("🚀 ~ returnasync ~ instructorId:", instructorId)
            const allExams = await examsOfInstructorUseCase(dependencies).execute(instructorId!);

            if( !allExams ) {
                throw ErrorResponse.notFound("exams not found");
            };

            res.status(200).json({ success: true, data: allExams, message: "instructor exams retrieved successfully"})
            
        }catch(error){
            next(error)
        }
    }


}