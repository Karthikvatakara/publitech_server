import { UserEntity } from "../../../../domain/entities/userEntity";
import { User } from "../models/User";

export const createUser = async(data:UserEntity):Promise<UserEntity | null> => {
    try{
        const newUser = await User.create(data);

        if(!newUser){
            throw new Error("user is not creafted");
        }

        return newUser
    }catch(error:any){
        console.error("error in the createuser repository")
        throw new Error(error?.message)
    }
}