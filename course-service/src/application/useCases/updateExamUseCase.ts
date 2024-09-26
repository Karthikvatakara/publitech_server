import { assessmentEntity } from "../../domain/entities/assessmentEntity";
import { IDependencies } from "../interfaces/IDependency";

export const updateExamUseCase = ( dependencies: IDependencies ) => {
    const { repositories: { updateExam }} = dependencies;

    return {
        execute: async( examId: string, data: assessmentEntity ) => {
            try{
                return await updateExam(examId,data);
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}