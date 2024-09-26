import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDepencencies";
import errorResponse from "../../_lib/common/error/errorResponse";

export const studentsCountController = ( dependencies: IDependencies ) => {
    const { useCases: { studentsCountUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) => {
        try{
            const studentsCount = await studentsCountUseCase(dependencies).execute();

            if(!studentsCount){
                throw errorResponse.notFound("no instructor is present")
            }

            res.status(200).json({ success: true, data: studentsCount , message :"instructorCount fetched succesfully"})
            
        }catch(error){
            next(error)
        }
    }
}