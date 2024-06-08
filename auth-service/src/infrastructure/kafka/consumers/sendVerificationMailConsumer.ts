import { string } from "joi";
import { storeOtp } from "../../services";

export default async(email:string,otp:string) => {
    try{
        
        await storeOtp(email,otp);
        console.log("data received hewwwwwwwwwwwwwwwwww IN AUTH SERVICE");
        
    }catch(error:any){
        console.error("sendVerifcationmailconsumer failed",error?.message)
    }
}