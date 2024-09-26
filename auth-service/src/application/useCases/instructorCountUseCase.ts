import { IDependencies } from "../interfaces/IDepencencies";

export const instructorCountUseCase = ( dependencies: IDependencies ) => {
    const { repositories: {instructorCount}} = dependencies;

    return {
        execute: async() => {
            try{
                return await instructorCount();
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}