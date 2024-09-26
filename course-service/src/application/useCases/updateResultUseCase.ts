import { dependencies } from "../../_boot/dependencies";
import { resultEntity } from "../../domain/entities/resultEntity";
import { IDependencies } from "../interfaces/IDependency";

export const updateResultUseCase = ( dependencies: IDependencies ) => {
        const { repositories: { updateResult }} = dependencies;
    return{
        execute: async( resultId: string, data: resultEntity ) => {
            try{
                return await updateResult(resultId,data)
            }catch(error){
                throw new Error((error as Error)?.message)
            }
        }
    }
}