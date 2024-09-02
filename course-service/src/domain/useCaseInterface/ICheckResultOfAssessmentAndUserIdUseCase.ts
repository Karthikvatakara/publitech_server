import { resultEntity } from "../entities/resultEntity";

export interface ICheckResultOfAssessmentAndUserIdUseCase {
    execute: ( assessmentRef: string, userRef: string ) =>  Promise<resultEntity | null>
}