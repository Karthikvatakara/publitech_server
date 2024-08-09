import { EnrollmentEntity } from "../../../domain/entities";
import { paymentSuccessEnrollment } from "../../database/mongodb/repositories/paymentSuccessEnrollment";
import { incrementCoursePurchase } from "../../database/mongodb/repositories";

export default async (data: EnrollmentEntity) => {
    try{
        console.log("🚀 ~ data:,reached in the course consumer", data);
        const enrollment = paymentSuccessEnrollment(data);
        const updateCourse = incrementCoursePurchase(data)
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}