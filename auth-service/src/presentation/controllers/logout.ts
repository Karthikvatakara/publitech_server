import { Request,Response,NextFunction } from "express"
import { IDependencies } from "../../application/interfaces/IDepencencies"

export const logoutController = (dependencies:IDependencies) =>{
 
    return async(req:Request,res:Response,next:NextFunction) => {
        try{
            res.cookie("access_Token","",{
                maxAge:1,
                httpOnly:true,
                secure:true,
                sameSite: "none",
            })

            res.cookie("refresh_Token","",{
                maxAge:1,
                httpOnly:true,
                secure:true,
                sameSite: "none",
            })

            res.status(204).json({})
        }catch(error:any){
            next(error)
        }
    }
}