import { resultEntity } from "../../domain/entities/resultEntity"
import { IDependencies } from "../interfaces/IDependency"

export const fetchExamResultByIdUseCase = ( dependencies: IDependencies )  => {
    const { repositories: { fetchExamResultById }} = dependencies;

    return{
        execute:async(resultId: string ) => {
            try{
                return await fetchExamResultById(resultId);
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
    
}