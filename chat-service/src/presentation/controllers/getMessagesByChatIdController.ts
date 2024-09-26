import { NextFunction, Request, Response } from "express";
import { IDependency } from "../../application/interfaces/IDependency";
import ErrorResponse from "../../_lib/common/error/errorResponse";

export const getMessagesByChatIdController = ( dependencies: IDependency) => {
    const { useCases: { getMessagesByChatIdUseCase }} = dependencies;

    return async(req: Request, res: Response, next: NextFunction) => {
        try{
            const chatId = req.params?.chatId;

            const result = await getMessagesByChatIdUseCase(dependencies).execute(chatId);

            if( !result ) {
                throw  ErrorResponse.internalError("no chat is available")
            }

            res.status(200).json({ success: true, data: result, message:" messages retrieved succesfully"})
            
        }catch(error){
            next(error)
        }
    }
}