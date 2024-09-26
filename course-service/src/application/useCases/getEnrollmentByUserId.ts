import { IDependencies } from "../interfaces/IDependency";

export const getEnrollmentByUserId = (dependencies:IDependencies) => {
    const { repositories: { getEnrollmentByUserId }} = dependencies;
    return {
        execute:async(courseId:string) => {
            try{
                return await getEnrollmentByUserId(courseId);
            }catch(error){
            throw new Error((error as Error)?.message);
            }
        }
    }
}