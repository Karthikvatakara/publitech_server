import { dependencies } from "../../_boot/dependencies";
import { IDependencies } from "../interfaces/IDependencies";

export const saveFcmTokenUseCase = ( dependencies: IDependencies ) => {
    const {repositories: { saveFcmToken }} = dependencies;

   return {
    execute: async( token: string, userId: string ) => {
        try{
            console.log("🚀 ~ execute:async ~ userId: in usecase", userId)
            return await saveFcmToken(token,userId);
        }catch(error){
            throw new Error((error as Error)?.message);
        }
    }
   }
}