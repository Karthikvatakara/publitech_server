import { dependencies } from "../../_boot/dependencies";
import { IDependencies } from "../interfaces/IDependency";

export const courseStatusChangeByInstructorUseCase = ( dependencies: IDependencies) => {
    const { repositories: { courseStatusChangeByInstructor }} = dependencies

    return {
        execute: async( id: string, status:"block" | "unblock") => {
            try{
                return await courseStatusChangeByInstructor(id,status)
            } catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}