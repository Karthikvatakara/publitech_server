import ErrorResponse from "../../../../_lib/common/error/ErrorResponse";
import { course, Enrollment } from "../models";

export const noOfStudentsPurchased  = async( instructorId: string) => {
    try{
        
        const courses = await course.find({ instructorRef: instructorId}).select('_id');

        const courseIds = courses.map((course) => course._id);

        if(courseIds.length === 0) {
            return 0;
        }

        const enrollmentData = await Enrollment.aggregate([
            {$match: { courseId: { $in: courseIds }}},
            { $group: { _id: '$userId'}},
            { $count: "totalStudents"}
        ]);

        const totalStudents = enrollmentData[0]?.totalStudents || 0;

        return totalStudents;

    }catch(error){
        throw new Error((error as Error)?.message);
    }
}