import { resultEntity } from "../entities/resultEntity";

export interface IGetResultsByUserIdUseCase {
    execute:( userId: string ) => Promise< resultEntity[] | null>
}