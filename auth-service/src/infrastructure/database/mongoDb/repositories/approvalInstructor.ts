import { User } from "../models/User";
import { UserEntity } from "../../../../domain/entities/userEntity";
// import { ObjectId } from "mongodb"

export const approvalInstructor = async(userData:UserEntity):Promise<UserEntity | null> =>{
    try{
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
        throw new Error(error?.message);
    }
}