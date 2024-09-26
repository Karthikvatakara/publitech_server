import { IDependencies } from "../interfaces/IDependency";

export const getLessonProgressUseCase = ( dependencies: IDependencies ) => {
    const { repositories: { getLessonProgress }} = dependencies;

    return {
        execute: async(userId: string, courseId: string, lessonId: string) => {
            try{    
                return await getLessonProgress(userId, courseId, lessonId)
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}