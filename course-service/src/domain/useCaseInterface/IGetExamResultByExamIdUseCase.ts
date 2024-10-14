import { resultEntity } from "../entities/resultEntity";

export interface IGetExamResultByExamIdUseCase {
    execute:( assessmentRef: string, userId: string ) => Promise< resultEntity | null >
}