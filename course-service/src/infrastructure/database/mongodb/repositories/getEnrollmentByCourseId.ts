import { EnrollmentEntity } from "../../../../domain/entities";
import { Enrollment } from "../models";

export const getEnrollmentByCourseId = async( courseId: string, userId: string ) : Promise<EnrollmentEntity | null> => {
    try{
        const enrollment = await Enrollment.findOne({courseId,userId});

        return enrollment;
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}