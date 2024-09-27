import { UserEntity } from "../../../domain/entities/userEntity";
// import { ObjectId } from "mongodb"
import { approvalInstructor } from "../../database/mongodb/repositories";

export default async(userData:UserEntity) => {
    try{    
        console.log(userData,"qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
        const data = await approvalInstructor(userData);
    }catch(error:any){
        console.error(error?.message,"error in the kafka consumer")
    }
}