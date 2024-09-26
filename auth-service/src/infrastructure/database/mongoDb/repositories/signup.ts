import { User } from "../models/User";
import { UserEntity} from "../../../../domain/entities/userEntity";


export const signup = async(data:UserEntity):Promise<UserEntity | null> => {
    try{
        const newUser = await User.create(data)
        console.log("new user created");
        
        if(!newUser){
            throw new Error("user creation failed")
        }

        return newUser as UserEntity
    }catch(error:any){
        throw new Error(error?.message)
    }
}

