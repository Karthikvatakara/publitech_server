import { resultEntity } from "../entities/resultEntity";

export interface ICreateExamResultUseCase {
    execute: ( data: resultEntity ) => Promise<resultEntity | null>;
}