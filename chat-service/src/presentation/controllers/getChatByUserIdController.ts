import { NextFunction, Request, Response } from "express";
import { IDependency } from "../../application/interfaces/IDependency";

export const getChatByUserIdController = ( dependencies: IDependency) => {
    const { useCases: { getChatByUserIdUseCase }} = dependencies;

    return async(req: Request, res: Response, next: NextFunction) => {
        try{
            console.log("hello")
            const userId = req.user?._id!;

            const getChats = await getChatByUserIdUseCase(dependencies).execute(userId);

            if( !getChats ) {
                throw new Error(" chats not retrieved")
            }

            res.status(200).json({ success: true, data: getChats, message: "chats retrieved successfully"})
        }catch(error){
            next(error)
        }
    }
}