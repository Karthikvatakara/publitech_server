import { dependencies } from "../../_boot/dependencies";
import { IDependency } from "../../application/interfaces/IDependency";
import { Request,Response,NextFunction } from "express";

export const createChatController = ( dependencies:IDependency ) => {
    const { useCases: { createChatUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) =>{
        try {
            const data = req.body;

        const createdChat = await createChatUseCase(dependencies).execute(data);

        if( !createdChat ) {
            throw new Error("chat not created")
        }

        res.status(200).json({ success: true, data: createdChat, message: "chat created succesfully"})
        } catch(error) {
            next(error)
        }
    }
}