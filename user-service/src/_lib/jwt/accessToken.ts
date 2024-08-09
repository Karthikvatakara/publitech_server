import jwt from "jsonwebtoken";

export const generateAccessToken = async(paylod: { _id:string,email:string,role:string}) => {
    try{
        const secret = process.env.ACCESS_TOKEN_SECRET

        if(!secret){
            throw new Error('secret key is not provided')
        }

        const { _id,email,role } = paylod;

        return jwt.sign({_id,email,role},secret!,{ expiresIn:"10m"})
    }catch(error:any){
        throw new Error(error?.message || "error occurd in generate accesstoken")
    }
}