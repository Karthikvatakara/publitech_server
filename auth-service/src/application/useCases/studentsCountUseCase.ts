import { IDependencies } from "../interfaces/IDepencencies";

export const studentsCountUseCase = ( dependencies: IDependencies ) => {
    const { repositories: {studentsCount}} = dependencies;

    return {
        execute: async() => {
            try{
                return await studentsCount();
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}