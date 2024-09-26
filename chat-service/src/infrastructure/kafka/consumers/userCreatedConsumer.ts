import { UserEntity } from "../../../domain/entities";
import { createUser } from "../../database/mongoDb/repositories";


export default async(data:UserEntity): Promise<void> => {
    try{

        const newUser = await createUser(data)
        console.log("data reached in usercreated consumer1111111111111111111",newUser);
        
    }catch(error:any){
        console.error("the errorr is",error?.message);
    }
}
