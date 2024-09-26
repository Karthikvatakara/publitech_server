import { IDependencies } from "../interfaces/IDependency";

export const blockInstructorUseCase = (dependecies:IDependencies) => {
    const {repositories:{blockInstructor}} = dependecies;
    return {
        execute:async(id:string,action: "block" | "unblock") => {
            try{    
                return await blockInstructor(id,action)
            }catch(error:any){
                throw new Error(error?.message)
            }
        }
    }
}