import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";

export const getAllStudentsController = ( dependecies: IDependencies ) => {
    const { useCases: { getAllStudentsUseCase }} = dependecies;

    return async( req: Request, res: Response, next: NextFunction ) => {
        try{

            const page = parseInt( req.query.page as string ) || 1;
            const limit = parseInt( req.query.limit as string ) || 5;
            const status = req.query.status as string;
            const search = req.query.search as string
            console.log("🚀 ~ returnasync ~ status:", status)
            console.log("🚀 ~ returnasync ~ search:", search)

            const { students, totalPages, totalCount } = await getAllStudentsUseCase(dependecies).execute( page, limit, status, search)

            res.status(200).json({
                success: true,
                data: students,
                totalPages,
                totalCount,
                currentPage: page,
                message:" fetched instrucotrs succesfully"
            })
        }catch(error){
            next(error);
        }
    }
}