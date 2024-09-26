import { UserEntity } from "../../../../domain/entities/userEntity";
import { ObjectId } from "mongodb";
import { User } from "../models/User";

export const blockInstructor = async(id:string,action: "block" | "unblock"):Promise<UserEntity | null> => {
    try{
        const userId = new ObjectId(id);
        console.log("🚀 ~ blockInstructor ~ userId:", userId)

        const isBlocked = action === "block"

        const updated = await User.findOneAndUpdate(
                        { _id:userId },
                        { $set: { isBlocked }},
                        { new: true}
        );
        return updated 
    }catch(error:any){
        throw new Error(error?.message)
    }
}