import { IDependencies } from "../interfaces/IDependency";
import { EnrollmentEntity } from "../../domain/entities";

export const createEnrollmentUseCase = (dependencies:IDependencies) => {
    const { repositories:{ createEnrollment }} = dependencies;

    return {
        execute: async(data:EnrollmentEntity) => {
            try{
                return await createEnrollment(data);
            }catch(error){
                throw new Error((error as Error)?.message || "error is occured in create enrollment usecase")
            }
        }
    }
}