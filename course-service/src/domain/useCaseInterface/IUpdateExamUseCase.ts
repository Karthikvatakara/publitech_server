import { assessmentEntity } from "../entities/assessmentEntity";

export interface IUpdateExamUseCase {
    execute:( examId: string, data: assessmentEntity ) => Promise<assessmentEntity | null>
}