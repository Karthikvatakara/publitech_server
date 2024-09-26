import { resultEntity } from "../entities/resultEntity";

export interface IFetchExamResultByIdUseCase {
    execute: ( resultId: string) => Promise<resultEntity |null >
}