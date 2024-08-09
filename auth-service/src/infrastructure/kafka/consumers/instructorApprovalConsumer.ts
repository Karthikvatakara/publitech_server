import { UserEntity } from "../../../domain/entities/userEntity";
import { approvalInstructor } from "../../database/mongoDb/repositories/approvalInstructor";
import { ObjectId } from "mongodb"

export default async(userData:UserEntity) => {
    try{    
        console.log(userData);
        approvalInstructor(userData);
    }catch(error:any){
        console.error(error?.message,"error in the kafka consumer")
    }
}