import { dependencies } from "../../_boot/dependencies";
import { IDependencies } from "../interfaces/IDepencencies";
import { verifyOtp } from "../../infrastructure/redis/verifyOtp";

export const verifyOtpUseCase = (dependencies:IDependencies) => {

    return {
        execute:async(email: string,otp: string) => {
            try{    
                return await verifyOtp(email,otp);
            }catch(error:any){
                console.log("something went wrong in verify otp usecase");
                throw new Error(error)
                // return false
            }
        }
    }
};