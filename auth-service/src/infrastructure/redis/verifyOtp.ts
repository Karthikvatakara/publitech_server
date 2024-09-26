import { Client } from "./redisClient"

export const verifyOtp = async(email: string,otp: string): Promise<boolean | null> => {
    try{
        const key = `otp:${email}`;
        const storedOtp = await Client.get(key);
        
        if(!storedOtp){
            throw new Error("otp expired")
        }
        if(storedOtp === otp) {
            console.log(`OTP VERIFIED for email ${email}`);
            return true;  
        }else {
            console.log(`otp verification failed for ${email}`);
            throw new Error("otp invalid")
        }
    }catch(error:any) {
        console.error(error,"in the otp verify page")
        throw new Error(error?.message)
    }
}