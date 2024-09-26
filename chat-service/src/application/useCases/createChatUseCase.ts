import { chatEntity } from "../../domain/entities";
import { IDependency } from "../interfaces/IDependency";

export const createChatUseCase = ( dependencies: IDependency ) => {
    const { repositories: { createChat }} = dependencies;

    return {
        execute: async( data: chatEntity) => {
            try{
                return await createChat(data);
            }catch(error) {
                throw new Error((error as Error)?.message);
            }
        }
    }
}