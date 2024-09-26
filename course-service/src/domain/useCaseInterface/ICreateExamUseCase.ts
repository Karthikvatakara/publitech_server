import { assessmentEntity } from "../entities/assessmentEntity";

export interface ICreateExamUseCase {
    execute: ( data: assessmentEntity )=> Promise<assessmentEntity | null>
}