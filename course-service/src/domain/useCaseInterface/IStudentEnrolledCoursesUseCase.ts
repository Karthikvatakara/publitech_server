import { EnrollmentEntity } from "../entities";
import { EnrollmentWithCompletionEntity } from "../entities/EnrollmentWithCompletionEntity";

export interface IStudentEnrolledCoursesUseCase {
    execute: (userId: string) => Promise<EnrollmentWithCompletionEntity[] | null>
}