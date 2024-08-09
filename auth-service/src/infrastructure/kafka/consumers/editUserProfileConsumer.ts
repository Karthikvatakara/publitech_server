import { UserEntity } from "../../../domain/entities/userEntity";
import { editUserProfileConsumer } from "../../database/mongoDb/repositories/editUserProfileConsumer";

export default async(userData:UserEntity) => {
    try{
        editUserProfileConsumer(userData)
    }catch(error:any){
        console.error(error?.message,"error in the kafka consumer")
    }
}