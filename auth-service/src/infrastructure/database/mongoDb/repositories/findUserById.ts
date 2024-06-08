import { User } from "../models/User";
import { UserEntity } from "../../../../domain/entities/userEntity";

export const findUserById = async(id: string): Promise<UserEntity | null> => {
    try {
        const existingUser = await User.findById(id);

        if(!existingUser) {
            throw new Error("user does not exist");
        }

        return existingUser ;
    }catch(error:any) {
        throw new Error(error?.message);
    }
}