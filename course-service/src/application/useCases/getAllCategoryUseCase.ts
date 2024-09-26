import { IDependencies } from "../interfaces/IDependency";

export const getAllCategoryUseCase = (dependencies:IDependencies) => {
    const {repositories: { getAllCategory }} = dependencies;
    return {
        execute: async() => {
            try{
                return await getAllCategory();
            }catch(error:any){
                throw new Error(error?.message || "error occured in getall category repository")
            }
        }
    }
}