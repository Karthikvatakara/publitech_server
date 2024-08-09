import { sendInstructorApproval } from "../../services/sendInstructorInformation";

export default async(data:{instructor:any,reason:string}) => {
    try{
        const { instructor,reason } = data;
        console.log("🚀 ~ async ~ reason:", reason)
        console.log("🚀 ~ async ~ instructor:", instructor)
        sendInstructorApproval({instructor,reason})
    }catch(error:any){
        console.error(error,"error ocuured in the instructor approval consumer in notifiaction service")
        throw new Error(error?.message)
    }
}