import ErrorResponse from "../../../../_lib/common/error/ErrorResponse";
import { course, Enrollment } from "../models";

export const instructorEnrollments = async( instructorId: string ) => {
    try{
        const courses = await course.find({instructorRef: instructorId}).select('_id title thumbnail pricing.amount');

        if(!courses.length) {
            throw ErrorResponse.notFound("no courses found")
        };

        const courseIds = courses.map((course)=> course._id);

        const enrollments = await Enrollment.aggregate([
            { $match: {courseId: {$in: courseIds}}},
            { $group: {_id: "$courseId", enrollmentCount: {$sum:1}}},
            
        ]);

        const coursesWithEnrollments = courses.map((course) => {
            // Find the enrollment count for the current course
            const enrollmentData = enrollments.find((enrollment) => String(enrollment._id) === String(course._id));

            return {
                courseId: course._id,
                title: course.title,
                thumbnail: course.thumbnail,
                amount: course.pricing.amount,
                enrollmentCount: enrollmentData ? enrollmentData.enrollmentCount : 0 // If no enrollments, return 0
            };
        });
        coursesWithEnrollments.sort((a, b) => b.enrollmentCount - a.enrollmentCount);

        const limitedCourses = coursesWithEnrollments.slice(0, 5);

        return limitedCourses;
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}