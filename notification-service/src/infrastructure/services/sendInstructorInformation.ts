import { instructorApprovalMail } from "../../_lib/nodemailer"

export const sendInstructorApproval = async(data:{instructor:any,reason:string}) =>{
    try{
        const { instructor,reason } = data;
        await instructorApprovalMail({instructor,reason})
    }catch(error:any){
        console.error(error,"error in the instructor approvalmail")
        throw new Error(error?.message)
    }
}