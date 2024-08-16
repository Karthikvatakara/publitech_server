import { UserEntity } from "../../../../domain/entities/userEntity";
import { User } from "../models/User";

export default async(data:UserEntity):Promise<UserEntity | null> => {
    try{
        const updated = await User.findByIdAndUpdate(
            data._id,
            { isBlocked: data?.isBlocked},
            { new: true } 
        );
        console.log("🚀 ~ async ~ updated:", updated)
        
        return updated

        }catch(error:any){
        throw new Error(error?.message)
    }
}