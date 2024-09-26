import { EnrollmentEntity } from "../entities";

export interface IGetEnrollmentByCourseIdUseCase {
    execute:(courseId: string, userId: string) => Promise<EnrollmentEntity | null>
}