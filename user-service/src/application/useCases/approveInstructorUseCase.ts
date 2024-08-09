import { IDependencies } from "../interfaces/IDependency";

export const approveInstructorUseCase = (dependency:IDependencies) => {
    const { repositories:{approveInstructor}} = dependency;
    return{
        execute: async(instructorId:string,reason:string) => {
            try{
                console.log("🚀 ~ execute:async ~ reason:==================", reason)
                return await approveInstructor(instructorId,reason)
            }catch(error:any){
                console.error(error,"error in the approveinstructor usecase")
                throw new Error(error?.message);
            }
        }
    }
}