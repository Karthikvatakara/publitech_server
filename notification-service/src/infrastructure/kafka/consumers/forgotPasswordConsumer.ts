import { sendForgotPasswordMail } from "../../services/sendForgotPasswordMail";

export default async(data:{email:string,token:string}) =>{
    try{
        const { email,token } = data;
        console.log(data,"received data");
        sendForgotPasswordMail(email,token)
    }catch(error:any){
        throw new Error("error occured in the forgot password consumer")
    }
}