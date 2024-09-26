import { course } from "../models"

export const updateCourseRejectStatus = async(courseId:string,status:string,rejectReason:string) => {
    
    try{
        const statusUpdate = await course.findByIdAndUpdate(courseId,
            { 
                stage: status === 'rejected' ? status : "accepted",
                isVerified: true,
                rejectReason: rejectReason
              },
              {new: true}
        )
        
        if(!statusUpdate){
            throw new Error("status not updated succesfully")
        }

        return statusUpdate;
    }catch(error){
        throw new Error((error as Error)?.message || "error occured in updatecourserejectstaturs repo")
    }
}