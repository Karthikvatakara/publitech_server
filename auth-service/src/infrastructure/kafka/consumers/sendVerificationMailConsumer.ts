import { string } from "joi";
import { storeOtp } from "../../services";

export default async(userData:any) => {
    try{
        const { email,otp } = userData;
        await storeOtp(email,otp);
        console.log("data received hewwwwwwwwwwwwwwwwww IN AUTH SERVICE",userData);
        
    }catch(error:any){
        console.error("sendVerifcationmailconsumer failed",error?.message)
    }
}