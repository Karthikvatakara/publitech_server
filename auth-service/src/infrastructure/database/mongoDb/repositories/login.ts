import { User } from "../models/User";
import { loginEntity } from "../../../../domain/entities/loginEntity";
import { UserEntity } from "../../../../domain/entities/userEntity";
import bcrypt from 'bcrypt'

export const login = async(data:loginEntity):Promise<UserEntity | null> => {
    try{    
        
        const { email,password } = data
        const user:UserEntity | null = await User.findOne({email: email})

        if(!user){
            throw new Error("user is not exist")
        }

        
            const isMatch:boolean = await bcrypt.compare(password,user.password!);

            if(!isMatch){
                throw new Error("password mismatch");
            }

            return user as UserEntity;
        

    }catch(error:any) {
        throw new Error(error?.message)
    }
}