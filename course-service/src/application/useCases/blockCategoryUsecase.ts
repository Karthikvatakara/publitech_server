import { category } from "../../infrastructure/database/mongodb/models";
import { IDependencies } from "../interfaces/IDependency";

export const blockCategoryUseCase = (dependencies:IDependencies) => {
    const { repositories: { blockCategory }} = dependencies;

    return {
        execute:async(id:string,action:"block"|"unblock") => {
            try{
                
                return await blockCategory(id,action)
            }catch(error:any){
                throw new Error(error?.message || "error ocuured in block category usecase")
            }
        }
    }
}