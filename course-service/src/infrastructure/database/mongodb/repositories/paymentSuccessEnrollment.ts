import { EnrollmentEntity } from "../../../../domain/entities";
import { Enrollment } from "../models";

export const paymentSuccessEnrollment = async(data:EnrollmentEntity): Promise<EnrollmentEntity | null> => {
    try{
        console.log("🚀 ~ paymentSuccessEnrollment ~ data: in repository", data)
        const enrollment = await Enrollment.create(data);
        
        return enrollment;
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}