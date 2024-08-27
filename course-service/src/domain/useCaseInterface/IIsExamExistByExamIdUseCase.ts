import { assessmentEntity } from "../entities/assessmentEntity";

export interface IIsExamExistByExamIdUseCase {
    execute:(examId: string ) => Promise<assessmentEntity |null>
}