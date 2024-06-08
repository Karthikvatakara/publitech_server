import { sendOtpMail } from "../../_lib/nodemailer";
import { generateVerificationOtp } from "../../_lib/otp";
import { sendVerifyMailProducer } from "../kafka/producers";

export const sendVerificationMail = async (email:string) => {
    try{
        const otp = generateVerificationOtp();

        await sendOtpMail(email,otp)

        console.log("inn the sendverification mail");
        
        const data = {
            email,
            otp
        }

        await sendVerifyMailProducer(data)
        
    }catch(error:any){
        console.error(error?.message,"errror in the send verificationmail")
    }

}