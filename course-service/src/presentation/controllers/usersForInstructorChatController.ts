import { NextFunction, Request, Response } from "express";
import { dependencies } from "../../_boot/dependencies";
import { IDependencies } from "../../application/interfaces/IDependency";

export const usersForInstructorChatController = ( dependencies: IDependencies ) => {
    const { useCases: { usersForInstructorChatUseCase } } = dependencies;

    return async(req: Request, res: Response, next: NextFunction) => {
        try{

            console.log("111111111111111111111111111111")
            const instructorId = req?.user?._id
            // const { instructorId } = req.body;

            const users = await usersForInstructorChatUseCase(dependencies).execute(instructorId!);

            if(!users) {
                throw new Error("users not found")
            }

            res.status(200).json({ success: true, data: users, message:" users fetched succesfully"})
        }catch(error){
            next(error)
        }
    }
}