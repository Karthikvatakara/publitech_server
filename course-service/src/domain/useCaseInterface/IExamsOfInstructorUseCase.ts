import { assessmentEntity } from "../entities/assessmentEntity";

export interface IExamsOfInstructorUseCase {
    execute:( instructorId: string ) => Promise<assessmentEntity[] | null>;
}