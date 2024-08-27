import { IDependencies } from "../interfaces/IDependency";

export const isExamExistUseCase = ( dependencies: IDependencies ) => {
    const { repositories: { isExamExist }} = dependencies;

    return {
        execute:async(courseId: string ) => {
            try{
                return await isExamExist(courseId);
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}