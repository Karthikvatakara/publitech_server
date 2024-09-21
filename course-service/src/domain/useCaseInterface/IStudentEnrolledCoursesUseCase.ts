import { EnrollmentEntity } from "../entities";

export interface IStudentEnrolledCoursesUseCase {
    execute: (userId: string) => Promise<EnrollmentEntity[] | null>
}