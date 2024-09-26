import { UserEntity } from "../../../domain/entities";
import { createUser } from "../../database/repositories/createUser";

export default async( data: UserEntity ) => {
    try{
         createUser(data);
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}