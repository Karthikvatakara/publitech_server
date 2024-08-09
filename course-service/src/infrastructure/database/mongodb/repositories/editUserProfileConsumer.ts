import { UserEntity } from "../../../../domain/entities/userEntity";
import { User } from "../models";

export const editUserProfileConsumer = async(userData:UserEntity) => {
    try{
        console.log(userData,"data in the edit userprofile consumer");
        const { _id,...restData } = userData;

        if(!userData || !_id){
            throw new Error("no userdata is got from kafka")
        }

        const user = await User.findByIdAndUpdate(_id,{
         $set:restData
        },{new:true,upsert:true})
        
        if(!user){
            throw new Error("user updation is failed")
        }
        
        return user;
    }catch(error:any){
        throw new Error(error?.message)
    }
}