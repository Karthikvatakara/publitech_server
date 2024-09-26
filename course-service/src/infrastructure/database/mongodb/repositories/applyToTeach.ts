import { UserEntity } from "../../../../domain/entities/userEntity";
import { applyToTeachEntity } from "../../../../domain/entities/applyToTeachEntity";
import { User } from "../models";

export default async(data:applyToTeachEntity):Promise<UserEntity | null> => {
    try{
        const { email,profession,profileDescription,github,linkedIn,mobile } = data;


        const updatedUser = await User.findOneAndUpdate({email:email},
            {$set:{
                profession: profession,
                profileDescription: profileDescription,
                'contact.socialMedia.github': github, 
                'contact.socialMedia.linkedIn': linkedIn,
                mobile: mobile,
                role: "student",
                stage:"applied"
            }
            },{new:true})  

            if(!updatedUser){
                console.log("error occurd in applyto teach consumer");
                throw new Error("error occured in the updated user ")
            }

            return updatedUser as UserEntity;
    }catch(error:any){
        console.error(error,"error in the applyTOTeach repositories");
        throw new Error(error?.message);
    }
}