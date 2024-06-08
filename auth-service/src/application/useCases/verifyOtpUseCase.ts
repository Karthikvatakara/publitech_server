import { dependencies } from "../../_boot/dependencies";
import { IDependencies } from "../interfaces/IDepencencies";
import { verifyOtp } from "../../infrastructure/redis/verifyOtp";

export const verifyOtpUseCase = (dependencies:IDependencies) => {

    return {
        execute:async(email: string,otp: string) => {
            try{    
                return await verifyOtp(email,otp);
            }catch(error){
                console.log("something went wrong in verify otp usecase");
                return false
            }
        }
    }
};