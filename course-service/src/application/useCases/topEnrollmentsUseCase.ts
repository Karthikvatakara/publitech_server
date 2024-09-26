import { dependencies } from "../../_boot/dependencies";
import { IDependencies } from "../interfaces/IDependency";

export const topEnrollmentsUseCase = ( dependencies: IDependencies ) => {
    const { repositories: { topEnrollments }} = dependencies;

    return{
        execute: async() => {
            try{
                return await topEnrollments();
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}