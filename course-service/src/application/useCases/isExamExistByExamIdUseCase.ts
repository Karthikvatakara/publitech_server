import { IDependencies } from "../interfaces/IDependency";

export const isExamExistByExamIdUseCase = ( dependencies: IDependencies ) => {
    const { repositories: { isExamExistByExamId }} = dependencies;
    
    return {
        execute: async( examId: string ) => {
            try{
                return await isExamExistByExamId(examId);
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}