import jwt from "jsonwebtoken";

export const verifyForgotPassword = (token:string):Promise<any> => {
        const secret = String(process.env.FORGOTPASSWORD_ACCESS_TOKEN_SECRET)
    try{
        return new Promise((resolve,reject) => {
            jwt.verify(token,secret,(error,decoded)=>{
                if(error){
                    if(error.name ==='TokenExpiredError'){
                        console.log(error,"in the token expired error");
                        reject (new Error("Token is expired"))
                    }else if(error.name === 'JsonWebTokenError'){
                        console.log(error,"in the token invalid errorr");
                        reject(new Error("invalid Token"))
                    }else{
                        reject(new Error(error?.message))
                    }
                }else{
                    console.log("no errror is occured");
                    
                    resolve(decoded)
                }
            })
        })
    }catch(error:any){
        throw new Error(error?.message);
    }
}