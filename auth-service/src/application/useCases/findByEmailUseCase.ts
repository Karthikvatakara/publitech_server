import { dependencies } from "../../_boot/dependencies";
import { IDependencies } from "../interfaces/IDepencencies";

export const findByEmailUseCase = (dependencies:IDependencies) => {
    const {repositories:{findByEmail}} = dependencies;

    return {
        execute: async(email:string) => {
            try{
                return await findByEmail(email);
            }catch(error:any){
                return false
            }
        }
    }
}