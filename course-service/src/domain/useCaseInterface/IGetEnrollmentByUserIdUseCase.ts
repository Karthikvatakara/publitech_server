import { EnrollmentEntity } from "../entities"

export interface IGetEnrollmentByUserId {
    execute:(coureId:string) => Promise<EnrollmentEntity[] | null>;
}