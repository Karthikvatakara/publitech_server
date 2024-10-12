import { Request,Response,NextFunction } from "express";
import { IDependencies } from "../../application/interfaces/IDepencencies";
import { generateAccessToken } from "../../_lib/jwt";
import { UserEntity } from "../../domain/entities/userEntity";
import { generateRefreshToken } from "../../_lib/jwt";
import { generateRandomString } from "../../_lib/other/generateRandomString";
import { OAuth2Client } from "google-auth-library";
import userCreatedProducer from "../../infrastructure/kafka/producers/userCreatedProducer";
import { error } from "console";
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

export const googleAuthController = (dependencies:IDependencies) => {
    const { useCases: {findByEmailUseCase,signupUserUseCase}} = dependencies;

    return async( req:Request,res:Response,next:NextFunction ) => {
        try{
                const { userCredentials } = req.body;
                console.log("🚀 ~ returnasync ~ userCredentials:", userCredentials)
                console.log("🚀 ~ returnasync ~ process.env.GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID)

                const ticket = await client.verifyIdToken({
                    idToken: userCredentials.credential,
                    audience: process.env.GOOGLE_CLIENT_ID
                });
                console.log("🚀 ~ returnasync ~ ticket:", ticket)

                const payload = ticket.getPayload();
                console.log("🚀 ~ returnasync ~ payload:", payload?.email)
                
                if(!payload || !payload.email){
                    return res.status(400).json({success:false,message:"google token is invalid and not contain the email address"})
                }
                
            const  { given_name,family_name,email,picture } = payload;
                console.log("🚀 ~ returnasync ~ payload:", payload)
                
            const exist:any = await findByEmailUseCase(dependencies).execute(email);
            console.log("🚀 ~ returnasync ~ exist:", exist)

            if(exist && exist.isBlocked ) {
                throw new Error("you are blocked by admin")
            }

            if(exist ){
                console.log("🚀 ~ returnasync ~ exist:", exist)
                
                const accessToken = generateAccessToken({_id: String(exist?._id),email: exist?.email!,role: exist?.role!});

                const refreshToken = generateRefreshToken({_id: String(exist?._id),email: exist?.email,role: exist?.role});

                res.cookie("access_Token",accessToken, {
                    httpOnly: true,
                    secure: true,
                    sameSite:"none",
                 })

                res.cookie("refresh_Token",refreshToken,{ 
                    httpOnly: true,
                    secure: true,
                    sameSite:"none",
                 })

                return res.status(200).json({success:true,data:exist,message:"user google logined"})
            }
            console.log("reached here");
            
            const newUser = await signupUserUseCase(dependencies).execute({
                email: email,
                username: `${given_name}_${family_name}`,
                password: `${generateRandomString()}`,
                profile: {
                    avatar:picture
                },
                isVerified:true
            } as UserEntity)
            
            if(!newUser){
                throw new Error("user is not created")
            }
            console.log("🚀 ~ returnasync ~ newUser:", newUser)
            
             // sending data to user-service 
             await userCreatedProducer(newUser,"user-service-topic");  

            const accessToken = generateAccessToken({_id: String(newUser._id),email:newUser.email,role:newUser.role});
            const refreshToken = generateRefreshToken({_id: String(newUser._id),email:newUser.email,role:newUser.role});

            res.cookie("access_Token",accessToken, { httpOnly:true})
            res.cookie("refresh_Token",refreshToken, { httpOnly:true})

            res.status(200).json({success:true,data:newUser,message:"user logged succesfully"})
        }catch(error){
            next(error)            
        }
             
    }
}