import { dependencies } from "../../_boot/dependencies";
import { IDependencies } from "../interfaces/IDependency";

export const instructorEnrollmentsUseCase = ( dependencies: IDependencies ) => {
    const { repositories: { instructorEnrollments }} = dependencies;

    return{
        execute:async(instructorId: string) => {
            try{
                return await instructorEnrollments(instructorId);
            }catch(error){
                throw new Error((error as Error)?.message)
            }
        }
    }
}