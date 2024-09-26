import { IDependencies } from "../interfaces/IDependency";

export const findUserByIdUseCase = (dependencies:IDependencies) => {
    const {repositories:{ findUserById }} = dependencies;

    return{
        execute:async(id:string) => {
            try{
              return await findUserById(id)
            }catch(error:any){
                throw new Error(error?.message || "user in the finduserusecase")
            }
        }
    }
}