import { resultEntity } from "../entities/resultEntity";

export interface IUpdateResultUseCase {
    execute: ( reusltId: string, data: resultEntity ) => Promise<resultEntity | null>
}