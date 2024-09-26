import { EnrollmentEntity } from "../../../../domain/entities";
import { Enrollment } from "../models";

export const noOfCompletedEnrollments = async( userId: string ) => {
    try{
        const enrollments = await Enrollment.find({ userId });

        const completedCourses:EnrollmentEntity[] = enrollments.filter((enrollment) => {
            const  lessonProgress  = enrollment?.progress?.lessonProgress;

            return lessonProgress && lessonProgress.length >0 && lessonProgress.every(lesson => lesson.isCompleted);
        })

        return completedCourses.length;
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}