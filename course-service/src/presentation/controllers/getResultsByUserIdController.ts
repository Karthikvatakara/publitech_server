import ErrorResponse from "../../_lib/common/error/ErrorResponse";
import { IDependencies } from "../../application/interfaces/IDependency";
import { Request, Response, NextFunction } from "express";

export const getResultsByUserIdController = ( dependencies: IDependencies ) => {
    const { useCases: { getResultsByUserIdUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) => {
        try{
            console.log("??????????????????????????")
            const userId = req.user?._id;
            console.log("🚀 ~ returnasync ~ userId:", userId)

            const results = await getResultsByUserIdUseCase(dependencies).execute(userId!)

            if( !results ) {
                return ErrorResponse.notFound("results not found")
            }

            res.status(200).json({ success: true, data: results, messsage: "results fetched successfully"})
        }catch(error){
            next(error)
        }
    }
}