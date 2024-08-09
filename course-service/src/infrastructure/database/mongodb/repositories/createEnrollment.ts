import { EnrollmentEntity } from "../../../../domain/entities/enrollmentEntity";
import { Enrollment } from "../models/enrollment";

export const createEnrollment = async(data:EnrollmentEntity):Promise<EnrollmentEntity | null> => {
    try{
        console.log(data,"data recieved in repocreateenrollment");
        
        const createEnrollment = await Enrollment.create(data);
        console.log("🚀 ~ createEnrollment ~ createEnrollment:", createEnrollment)

        return createEnrollment;
    }catch(error) {
        throw new Error((error as Error)?.message || "error ocuured in createEnrollment repos")
    }
}