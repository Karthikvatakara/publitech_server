import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDepencencies";
import errorResponse from "../../_lib/common/error/errorResponse";

export const instructorCountController = ( dependencies: IDependencies ) => {
    const { useCases: { instructorCountUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) => {
        try{
            const instructorCount = await instructorCountUseCase(dependencies).execute();

            if(!instructorCount){
                throw errorResponse.notFound("no instructor is present")
            }

            res.status(200).json({ success: true, data: instructorCount , message :"instructorCount fetched succesfully"})
            
        }catch(error){
            next(error)
        }
    }
}