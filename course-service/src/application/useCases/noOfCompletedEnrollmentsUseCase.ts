import { dependencies } from "../../_boot/dependencies";
import { IDependencies } from "../interfaces/IDependency";

export const noOfCompletedEnrollmentsUseCase = ( dependencies: IDependencies ) => {
    const { repositories: { noOfCompletedEnrollments }} = dependencies;

    return {
        execute:async(userId: string) => {
            try{
                return await noOfCompletedEnrollments(userId);
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}