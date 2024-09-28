import { ObjectId } from "mongoose";
import { EnrollmentEntity } from "../entities";
import { EnrollmentWithCompletionEntity } from "../entities/EnrollmentWithCompletionEntity";

export interface IStudentEnrolledCoursesUseCase {
    execute: (userId: string | ObjectId) => Promise<EnrollmentWithCompletionEntity[] | null>
}