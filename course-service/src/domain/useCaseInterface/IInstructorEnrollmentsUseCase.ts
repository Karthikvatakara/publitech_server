import { EnrollmentEntity } from "../entities";

export interface IInstructorEnrollmentsUseCase {
    execute:(instructorId: string) => Promise<EnrollmentEntity[] | null>
}