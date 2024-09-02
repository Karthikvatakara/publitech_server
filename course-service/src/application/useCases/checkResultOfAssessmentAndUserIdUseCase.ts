import { dependencies } from "../../_boot/dependencies";
import { IDependencies } from "../interfaces/IDependency";

export const checkResultOfAssessmentAndUserIdUseCase = ( dependencies: IDependencies ) => {
    const { repositories: { checkResultOfAssessmentAndUserId }} = dependencies;

    return {
        execute: async( assessmentRef: string, userRef: string ) => {
            try{
                return await checkResultOfAssessmentAndUserId(assessmentRef,userRef);
            }catch(error){
                throw new Error((error as Error)?.message)
            }
        }
    }
}