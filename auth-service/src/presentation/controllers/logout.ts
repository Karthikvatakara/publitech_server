import { Request,Response,NextFunction } from "express"
import { IDependencies } from "../../application/interfaces/IDepencencies"

export const logoutController = (dependencies:IDependencies) =>{
 
    return async(req:Request,res:Response,next:NextFunction) => {
        try{
            res.cookie("access_Token","",{
                maxAge:0,
                httpOnly:true,
                secure:true
            })

            res.cookie("refresh_Token","",{
                maxAge:0,
                httpOnly:true,
                secure:true
            })

            res.status(204).json({})
        }catch(error:any){
            next(error)
        }
    }
}