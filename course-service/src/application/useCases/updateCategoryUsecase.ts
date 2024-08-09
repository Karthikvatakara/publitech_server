import { CategoryEntity } from "../../domain/entities";
import { IDependencies } from "../interfaces/IDependency";

export const updateCategoryUseCase = (dependencies:IDependencies) => {
    const { repositories: { updateCategory }} = dependencies;

    return {
        execute: async(id:string,data:CategoryEntity) => {
            try{
                return await updateCategory(id,data)
            }catch(error:any){
                throw new Error(error?.message || "error ocuured in update category usecase")
            }
        }
    }
}