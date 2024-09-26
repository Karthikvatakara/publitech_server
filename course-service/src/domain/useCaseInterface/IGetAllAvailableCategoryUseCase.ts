import { CategoryEntity } from "../entities";

export interface IGetAllAvailableCategoryUseCase {
    execute:() => Promise<CategoryEntity[] | null>
}