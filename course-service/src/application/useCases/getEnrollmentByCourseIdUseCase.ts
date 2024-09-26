import { IDependencies } from "../interfaces/IDependency";

export const getEnrollmentByCourseIdUseCase = ( dependencies: IDependencies ) => {
    const { repositories: { getEnrollmentByCourseId }} = dependencies;

    return {
        execute:async( courseId: string, userId: string ) => {
            try{
                return await getEnrollmentByCourseId(courseId,userId);
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}