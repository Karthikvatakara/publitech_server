import { NextFunction, Request, Response } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import instructorStatusChange from "../../infrastructure/kafka/producers/instructorStatusChange";

export const toggleStudentBlockStatusController = (dependecies: IDependencies) => {
    const {useCases: { toggleStudentBlockStatusUseCase }} = dependecies;

    return async( req: Request, res: Response, next: NextFunction ) => {
        try{
            const userId = req.params.userId

            const updatedUser = await toggleStudentBlockStatusUseCase(dependecies).execute(userId);
            console.log("🚀 ~ returnasync ~ updatedUser:?????????????????????", updatedUser)

            instructorStatusChange(updatedUser!,"auth-service-topic")
            instructorStatusChange(updatedUser!,"course-service-topic")

            res.status(200).json({
                success: true,
                data: updatedUser,
                message:"user data  updated succesfully"
            })

        }catch(error) {
           next(error);
        }
    }
}