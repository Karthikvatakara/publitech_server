import { NextFunction, Request, Response } from "express";
import { dependencies } from "../../_boot/dependencies";
import { IDependencies } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/ErrorResponse";

export const courseStatusChangeByInstructorController = ( dependencies: IDependencies) => {
    const { useCases: { courseStatusChangeByInstructorUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction) => {
        try{
            console.log("aaaaaaaaaaaaaaaaaaaaaaa")
            const { id } = req.params;
            const { status } = req.body;

            if (!id || !status) {
                throw ErrorResponse.internalError("requirements not given")
            }

            const updaedCourse = await courseStatusChangeByInstructorUseCase(dependencies).execute(id,status)

            if(!updaedCourse) {
                throw ErrorResponse.internalError("course status not updated succesfully")
            }

            res.status(200).json({succes:true,data:updaedCourse,message: "course status updated succesfully"})
        }catch(error){
            next(error)
        }
    }
}