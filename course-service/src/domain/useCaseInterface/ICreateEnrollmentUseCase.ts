import { EnrollmentEntity } from "../entities";

export interface ICreteEnrollmentUseCase {
    execute:(data:EnrollmentEntity) => Promise<EnrollmentEntity | null>
}