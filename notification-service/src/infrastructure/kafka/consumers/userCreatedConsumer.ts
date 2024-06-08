import { sendVerificationMail } from "../../services/sendVerificationMail";

export default async(data:string) => {
    try{
        
        await sendVerificationMail(data)
    }catch(error:any) {
        console.error("usercreated consumer failed",error?.message)
    }
}