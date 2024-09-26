import { IDependency } from "../interfaces/IDependency";

export const getChatByUserIdUseCase = ( dependencies : IDependency) => {
    const { repositories: { getChatByUserId }} = dependencies;

    return {
        execute: async( userId: string) => {
            try{
                return await getChatByUserId(userId);
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}