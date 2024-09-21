import { Enrollment } from "../models";

export const noOfStudentEnrolledCourses = async( userId: string ) => {
    try{
        const noOfCourses = await Enrollment.countDocuments({userId});

        return noOfCourses;
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}