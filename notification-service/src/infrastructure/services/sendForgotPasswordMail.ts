import { forgotPasswordMail } from "../../_lib/nodemailer";

export const sendForgotPasswordMail = async( email: string,token: string) => {
    try{
        await forgotPasswordMail({ email: email,url: `https://publitech-client.vercel.app/auth/change-password?token=${token}`})
    }catch(error:any){
        throw new Error(error?.message);
    }
}