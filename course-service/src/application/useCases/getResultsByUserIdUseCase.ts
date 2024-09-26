import { IDependencies } from "../interfaces/IDependency";

export const getResultsByUserIdUseCase = ( dependencies: IDependencies ) => {
        const { repositories: { getResultsByUserId }} = dependencies;
    return{
        execute:async(userId: string) => {
            try{
                return await getResultsByUserId(userId);
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}