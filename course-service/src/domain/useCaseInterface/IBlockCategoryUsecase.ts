import { CategoryEntity } from "../entities";

export interface IBlockCategoryUseCase {
    execute:(id:string,action:"block"|"unblock") => Promise<CategoryEntity | null>
}