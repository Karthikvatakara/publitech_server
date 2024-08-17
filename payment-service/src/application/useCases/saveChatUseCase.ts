import { chatEntity } from "../../domain/entities/chatEntity";
import { saveChat } from "../../infrastructure/database/mongoDb/repositories";
import { IDepencencies } from "../interfaces/IDependency";

export const saveChatUseCase = ( dependencies: IDepencencies ) => {
    return {
        execute: async(data: { userId: string , instructorRef: string } ) => {
            try{
                return await saveChat(data)
            }catch(error) {
                throw new Error((error as Error)?.message)
            }
        }
    }
}