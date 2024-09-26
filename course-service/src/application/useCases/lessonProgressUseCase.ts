import { IDependencies } from "../interfaces/IDependency";

export const lessonProgressUseCase = ( dependencies: IDependencies ) => {
    const { repositories: { lessonProgress}} = dependencies;

    return {
        execute:async( userId: string, courseId: string, lessonId: string, timeWatched: number, totalDuration: number) => {
            try{
                return await lessonProgress(userId,courseId,lessonId,timeWatched,totalDuration)
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}