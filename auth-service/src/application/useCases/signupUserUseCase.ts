import { UserEntity } from "../../domain/entities/userEntity";
import { IDependencies } from "../interfaces/IDepencencies";

export const signupUserUseCase = (dependencies:IDependencies) => {
    const {repositories:{signup}} = dependencies;

    return {
        execute:async(data:UserEntity) => {
            try{
                return await signup(data)
            }catch(error:any){
                throw new Error(error?.message || "user creation failed")
            }
        }
    }
}