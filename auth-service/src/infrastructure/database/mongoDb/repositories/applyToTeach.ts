import { User } from "../models/User";
import { applyToTeachEntity } from "../../../../domain/entities/applyToTeachEntity";
import { UserEntity } from "../../../../domain/entities/userEntity";
import { findByEmail } from "./findByEmail";

export const applyToTeach = async(data:applyToTeachEntity):Promise<UserEntity | null> => {
    try{
        const { email,profession,profileDescription,github,linkedIn,mobile } = data;
        console.log("🚀 ~ applyToTeach ~ profileDescription:", profileDescription)
        console.log("🚀 ~ applyToTeach ~ profession:", profession)
        console.log("🚀 ~ applyToTeach ~ email:", email)

        const user:UserEntity |null = await User.findOne({email:email})

        if(!user){
            throw new Error("user is not exist");
        }
        if(user?.stage === "applied"){
            throw new Error("already applied");
        }

       const updatedUser = await User.findOneAndUpdate({email:email},
                            {$set:{
                                proffesion: profession,
                                profileDescription: profileDescription,
                                'contact.socialMedia.github': github,
                                'contact.socialMedia.linkedIn': linkedIn,
                                mobile: mobile,
                                role: "student",
                                stage:"applied"
                            }
                            },{new:true})  
        if(!updatedUser){
            throw new Error("user not found or update failed")
        }
        

        return updatedUser as UserEntity
    }catch(error:any){
        throw new Error(error?.message);
    }
}