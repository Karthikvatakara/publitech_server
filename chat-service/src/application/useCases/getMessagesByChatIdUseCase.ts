import { IDependency } from "../interfaces/IDependency";

export const getMessagesByChatIdUseCase = ( dependencies: IDependency ) => {
    const { repositories: { getMessagesByChatId } } = dependencies;

   return {
    execute: async(chatId: string) => {
        try{
            return await getMessagesByChatId(chatId);
        }catch(error){
            throw new Error((error as Error)?.message)
        }
    }
   }
}