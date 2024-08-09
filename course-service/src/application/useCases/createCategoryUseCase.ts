import { CategoryEntity } from "../../domain/entities";
import { IDependencies } from "../interfaces/IDependency";

export const createCategoryUseCase = (dependencies:IDependencies) => {
    const { repositories: { createCategory }} = dependencies;

    return {
        execute:async(data:CategoryEntity) => {
            try{
                return await createCategory(data)
            }catch(error:any){
                throw new Error(error?.message || "error occured in the createcategoryusecase")
            }
        }
    }
}