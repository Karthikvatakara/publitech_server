import { UserEntity } from "../../../domain/entities/userEntity";
import { createUser } from "../../database/mongoDb/repositories/createUser";

export default async(data:UserEntity): Promise<void> => {
    try{

        const newUser = await createUser(data)
        console.log("data reached in usercreated consumer1111111111111111111",newUser);
        
    }catch(error){
        console.error("the errorr is",(error as Error)?.message);
    }
}
