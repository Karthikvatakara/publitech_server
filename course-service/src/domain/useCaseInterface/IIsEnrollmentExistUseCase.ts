import { EnrollmentEntity } from "../entities";

export interface IIsEnrollmentExistUseCase {
    execute:(courseId:string,userId:string) => Promise<EnrollmentEntity | null>
}