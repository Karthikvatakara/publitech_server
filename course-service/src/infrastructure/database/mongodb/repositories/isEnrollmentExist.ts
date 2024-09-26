import { EnrollmentEntity } from "../../../../domain/entities";
import { Enrollment } from "../models";

export const isEnrollmentExist = async(courseId:string,userId:string):Promise<EnrollmentEntity | null> => {
    try{
        const data = { courseId,userId }
        const enrollment = await Enrollment.findOne({courseId,userId});

        if(!enrollment){
            throw new Error("enrollment not exist")
        }

        return enrollment
    }catch(error){
        throw new Error((error as Error)?.message || "error occured in isenrollment exist repository")
    }
}