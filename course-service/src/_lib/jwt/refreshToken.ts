import  jwt  from "jsonwebtoken";

export const generateRefreshToken = (payload: { _id:string,email:string,role:string}) => {
    try{
        const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET

        if(!refreshTokenSecret){
            throw new Error("refresh token secret is not provided")
        }

        const { _id,email,role } = payload;

        return jwt.sign({ _id,email,role },refreshTokenSecret!,{ expiresIn:"30d" })
        
    }catch(error:any){
        console.error(error,"error occured in genereate refreshtoken")
        throw new Error(error?.message || "failed to generate refresh token")
    }
}