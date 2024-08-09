import { IDependencies } from "../interfaces/IDependency";

export const getAllAvailableCategoryUseCase = (dependencies:IDependencies) => {
    const { repositories: { getAllAvailableCategory }} = dependencies;

    return {
        execute:async() => {
            try{
                return await getAllAvailableCategory()
            }catch(error:any){
                throw new Error(error?.message || "error in getallavailbalecategory usecase")
            }
        }
    }
}