import { EnrollmentEntity } from "../../../../domain/entities";
import { course } from "../models";

export const incrementCoursePurchase = async (data: EnrollmentEntity): Promise<void> => {
    try {
        const { courseId } = data;
        console.log(courseId, "AAAAAAAAAAAAAA");
        
        const updatedCourse = await course.findByIdAndUpdate(
            courseId,
            { $inc: { noOfPurchases: 1 } },
            { new: true }
        );

        if (!updatedCourse) {
            throw new Error("Course not found or purchase is not updated");
        }

    } catch (error) {
        throw new Error((error as Error)?.message);
    }
};