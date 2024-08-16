import jwt from "jsonwebtoken";

export const generateAccessToken = (payload:{_id:string,email: string, role:string}) => {
    try{
        const accesstokenSecret = process.env.ACCESS_TOKEN_SECRET
        if(!accesstokenSecret) {
            throw new Error("access token secret is not defined");
        }
        const { _id,email,role } = payload;
        
        return jwt.sign({_id,email,role},accesstokenSecret,{expiresIn:'10m'});

    }catch(error:any) {
        throw new Error(error?.message || "failed to generate access token")
    }
}


                            
