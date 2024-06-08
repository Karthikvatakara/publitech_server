import { applyToTeachEntity } from "../../domain/entities/applyToTeachEntity";
import { IDependencies } from "../interfaces/IDepencencies";

export const applyToTeahcUseCase = (dependencies:IDependencies) => {
    const { repositories:{ applyToTeach }} = dependencies;

    return {
        execute:async(data:applyToTeachEntity) => {
            try{
                return await applyToTeach(data)
            }catch(error:any){
                throw new Error(error?.message)
            }
        }
    }
}