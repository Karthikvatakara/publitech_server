import { UserEntity } from "../../../domain/entities/userEntity";
import instructorStatusChange from "../../database/mongoDb/repositories/instructorStatusChange";

export default async(userData:UserEntity) => {
    try{
        console.log(userData,"QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQTTTTTTTTTTTTTTTTTTTYYYYYYYYYY");
        instructorStatusChange(userData)
    }catch(error:any){
        console.error(error,"error in instructorstatus change consumer")
        throw new Error(error?.message)
    }
}