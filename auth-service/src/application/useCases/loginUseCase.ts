import { loginEntity } from "../../domain/entities/loginEntity";
import { UserEntity } from "../../domain/entities/userEntity";
import { IDependencies } from "../interfaces/IDepencencies";

export const loginUseCase = (dependencies:IDependencies) => {
    const { repositories:{login} } = dependencies;

    return {
        execute:async(data:loginEntity) => {
            try{
                return await login(data);
            }catch(error:any){
                throw new Error(error?.message || "user login failed")
            }
        }
    }
}