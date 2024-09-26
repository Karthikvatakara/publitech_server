import { Enrollment } from "../models";
import { EnrollmentEntity } from "../../../../domain/entities";

export const getEnrollmentByUserId = async(userId:string) :Promise<EnrollmentEntity[] | null> => {
    try{
        const enrollmentsByUser = await Enrollment.find({userId}).populate("courseId")
        
        return enrollmentsByUser;
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}