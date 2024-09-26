import { User } from "../models/User"
import { UserEntity } from "../../../../domain/entities/userEntity";
import ErrorResponse from "../../../../_lib/error/ErrorResponse";

export const updatePassword = async(email:string,password:string) => {
    try{

        const updated = await User.findOneAndUpdate({email},
                {$set:{password}},
                {new:true}
        )
        
        if(!updated){
            throw ErrorResponse.internalError("password not updated ");
        }

        return updated 
    }catch(error:any){
        throw new Error(error?.message);
    }
}
