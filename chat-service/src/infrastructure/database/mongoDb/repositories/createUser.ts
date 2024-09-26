import { User } from "../models";
import { UserEntity } from "../../../../domain/entities";

export const createUser = async(data:UserEntity):Promise<UserEntity | null> => {
    try{
        const newUser = await User.create(data);

        if(!newUser){
            throw new Error("user is not created");
        }

        return newUser
    }catch(error:any){
        console.error("error in the createuser repository")
        throw new Error(error?.message)
    }
}