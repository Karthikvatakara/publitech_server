import { resultEntity } from "../entities/resultEntity";

export interface IGetExamResultByExamIdUseCase {
    execute:( assessmentRef: string ) => Promise< resultEntity | null >
}