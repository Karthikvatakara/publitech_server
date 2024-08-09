import { CategoryEntity } from "../entities";

export interface IUpdateCategoryUseCase {
    execute:(id:string,data:CategoryEntity) => Promise<CategoryEntity | null>
}