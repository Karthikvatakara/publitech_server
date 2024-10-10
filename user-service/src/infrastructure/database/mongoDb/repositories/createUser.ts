import { User } from "../models/User";
import { UserEntity } from "../../../../domain/entities/userEntity";

export const createUser = async(data:UserEntity):Promise<UserEntity | null> => {
    try{
        const newUser = await User.create(data);

        if(!newUser){
            throw new Error("user is not created");
        }

        return newUser
    }catch(error){
        console.error("error in the createuser repository")
        throw new Error((error as Error)?.message)
    }
}