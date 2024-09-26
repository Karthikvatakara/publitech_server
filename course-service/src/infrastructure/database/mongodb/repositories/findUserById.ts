import { User } from "../models";
import { UserEntity } from "../../../../domain/entities";

export const findUserById = async(id:string): Promise<UserEntity | null> => {
    try{
        const existingUser = await User.findById(id);

        if(!existingUser){
            throw new Error("user is not exist")
        }
        return existingUser;
    }catch(error:any){  
        throw new Error(error?.message)
    }
}