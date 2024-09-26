import { IDependencies } from "../interfaces/IDependency";

export const isEnrollmentExistUseCase = (dependencies:IDependencies) => {
    const { repositories: { isEnrollmentExist }} = dependencies;

    return {
        execute: async(courseId:string,userId:string) => {
            try{
                console.log("🚀 ~ execute:async ~ courseId: in useCase", courseId)
                return await isEnrollmentExist(courseId,userId)
            }catch(error){
                throw new Error((error as Error)?.message)
            }
        }
    }
}   