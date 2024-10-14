import { IDependencies } from "../interfaces/IDependency";

export const getExamResultByExamIdUseCase = ( dependencies: IDependencies ) =>{
    const { repositories:{ getExamResultByExamId }} = dependencies;

    return{
        execute: async(assessmentRef: string, userId: string ) => {
            try{
                return await getExamResultByExamId(assessmentRef, userId);
            }catch(error){
                throw new Error((error as Error)?.message)
            }
        }
    }
}