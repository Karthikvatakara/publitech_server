import { assessmentEntity } from "../entities/assessmentEntity";

export interface IIsExamExistUseCase {
    execute:(courseId: string) => Promise<assessmentEntity |null>
}