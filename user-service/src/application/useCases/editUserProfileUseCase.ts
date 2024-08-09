import { UserEntity } from "../../domain/entities/userEntity";
import { IDependencies } from "../interfaces/IDependency";

export const editUserProfileUseCase = (dependecies:IDependencies) => {
    const { repositories: { editUserProfile }} = dependecies;
    return {
        execute: async(data:UserEntity) =>{
            try{
                return await editUserProfile(data);
            }catch(error){
                throw new Error((error as Error)?.message)
            }
        }
    }
}