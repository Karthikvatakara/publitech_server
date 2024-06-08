import { IDependencies } from "../interfaces/IDepencencies";


export const findUserByIdUseCase = (dependencies:IDependencies) => {
    const {repositories:{ findUserById }} = dependencies;

    return{
        execute:async(id:string) => {
            try{
              return await findUserById(id)
            }catch(error:any){
                console.error(error,"error in the usecase")
                return false
            }
        }
    }
}