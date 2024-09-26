import { resultEntity } from "../../domain/entities/resultEntity";
import { IDependencies } from "../interfaces/IDependency";

export const createExamResultUseCase = ( dependencies: IDependencies ) => {
    const { repositories: { createExamResult }} = dependencies;

    return {
        execute: async( data: resultEntity) => {
            try{
                return await createExamResult(data);
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}