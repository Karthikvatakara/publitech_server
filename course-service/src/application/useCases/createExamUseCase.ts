import { assessmentEntity } from "../../domain/entities/assessmentEntity";
import { IDependencies } from "../interfaces/IDependency";

export const createExamUseCase = ( dependencies: IDependencies ) => {
        const { repositories: { createExam }} = dependencies;
    return {
        execute: async( data: assessmentEntity ) => {
            console.log("🚀 ~ execute:async ~ data: in usecase createexam", data)
            try{
                return await createExam(data);
            }catch(error){
                throw new Error((error as Error)?.message)
            }
        }
    }
}