import { ObjectId } from "mongoose";

export interface INoOfStudentEnrolledCoursesUseCase {
    execute:( userId: string ) => Promise<number | null>
}