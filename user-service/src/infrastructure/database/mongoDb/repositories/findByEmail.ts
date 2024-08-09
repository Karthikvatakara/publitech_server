import { User } from "../models/User";
import { UserEntity } from "../../../../domain/entities/userEntity";

export const findByEmail = async (email:string): Promise<UserEntity | null> => {
    try{
        const existingUser = await User.findOne({email:email});
        console.log("the existing sssss is",existingUser);
        
        // if(!existingUser){
        //     console.log("🚀 ~ findByEmail ~ existingUser:", existingUser)
        //     throw ErrorResponse.unAuthorized("email not exist");
        // }

        return existingUser as UserEntity;
        
    }catch(error:any){
        throw new Error(error?.message);
    }
}