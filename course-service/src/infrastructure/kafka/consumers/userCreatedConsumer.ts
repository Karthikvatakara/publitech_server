import { UserEntity } from "../../../domain/entities/userEntity";
import { createUser } from "../../database/mongodb/repositories/createUser";

export default async(data:UserEntity): Promise<void> => {
    try{

        const newUser = await createUser(data)
        console.log("data reached in usercreated consumer1111111111111111111",data);
        
    }catch(error:any){
        console.error("the errorr is",error?.message);
    }
}
