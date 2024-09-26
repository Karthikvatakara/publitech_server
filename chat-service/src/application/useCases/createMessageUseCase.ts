import { messageEntity } from "../../domain/entities";
import { IDependency } from "../interfaces/IDependency";

export const createMessageUseCase = ( dependencies: IDependency ) => {
    const { repositories: { createMessage }} = dependencies;

    return {
        execute: async( data: messageEntity ) => {
            console.log("🚀 ~ execute:async ~ data:", data)
            try{
                return await createMessage(data);
            }catch(error){
                throw new Error((error as Error)?.message)
            }
        }
    }
}