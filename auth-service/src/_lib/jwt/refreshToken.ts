import jwt from "jsonwebtoken";

export const generateRefreshToken = (payload:{_id:string,email:string,role:string}) => {
    try{    
        const secret = process.env.REFRESH_TOKEN_SECRET;
        if(!secret) {
            throw new Error("the refresh token secret is not provided");
        }
        const { _id,email,role } = payload;
        return jwt.sign({ _id,email,role },secret!,{expiresIn:'30d'})
    }catch(error:any){
        throw new Error("failed to generate refresh token")
    }
}