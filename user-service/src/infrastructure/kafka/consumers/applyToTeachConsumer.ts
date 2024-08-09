import { UserEntity } from "../../../domain/entities/userEntity";
import applyToTeach from "../../database/mongoDb/repositories/applyToTeach";
import { applyToTeachEntity } from "../../../domain/entities/applyToTeachEntity";

export default async(data:applyToTeachEntity):Promise<void> => {
    try{

        const appliedInstructor = await applyToTeach(data)
        console.log(appliedInstructor,"data reahced in applytoteach consumer mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
        
    }catch(error:any){
        console.error("error occured in the applyto teachconsumer")
    }
}