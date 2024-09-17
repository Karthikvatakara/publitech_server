import { UserEntity } from "../../../domain/entities";
import { User } from "../models";

export const createUser = async( data: UserEntity ):Promise<UserEntity | null> => {
    try{
        const newUser = await User.create(data);

        if(!newUser){
            throw new Error("user not created")
        }

        return newUser;
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}