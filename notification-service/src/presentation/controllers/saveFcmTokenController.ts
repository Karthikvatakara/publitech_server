import { IDependencies } from "../../application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";

export const saveFcmTokenController = ( dependencies: IDependencies ) => {
    const { useCases: { saveFcmTokenUseCase }} = dependencies;

    return async( req: Request, res: Response, next: NextFunction ) => {
        try{
            const { token } = req.body;
            console.log("🚀 ~ returnasync ~ token:", token)
            const userId = req.user?._id;

            const  savedToken = await saveFcmTokenUseCase(dependencies).execute(token,userId!);

            if(!savedToken){
                throw new Error("token not saved")
            }
            
            res.status(200).json({ data: savedToken, success: true, message: "token saved succesfully"})
        }catch(error){
            next(error)
        }
    }
}