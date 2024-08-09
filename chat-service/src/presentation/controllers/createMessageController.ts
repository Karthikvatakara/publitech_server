import { NextFunction, Request, Response } from "express";
import { IDependency } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/errorResponse";

export const createMessageController = ( dependencies: IDependency ) => {
    const { useCases: { createMessageUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction) => {
        try{

            const { content, chatId } = req.body;

            const userId = req.user?._id;
            console.log("🚀 ~ returnasync ~ userId:", userId)

            if( !content || !chatId ) {
                throw ErrorResponse.internalError("content and chatId is not provided")
            }

            
            const createdMessage = await createMessageUseCase(dependencies).execute(req.body);

            if( !createdMessage ) {
                throw new Error("message creation failed")
            }

            res.status(200).json({ success: true, data: createdMessage, message:" message creation failed"});
            
        }catch(error){
            next(error);
        }
    }
}