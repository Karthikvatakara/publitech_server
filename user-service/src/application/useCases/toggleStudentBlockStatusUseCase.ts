import { dependecies } from "../../_boot/dependencies";
import { IDependencies } from "../interfaces/IDependency";

export const toggleStudentBlockStatusUseCase = ( dependecies: IDependencies ) => {
    const { repositories:{ toggleStudentBlockStatus }} = dependecies;

    return {
        execute:async(userId: string ) => {
            try{
                return await toggleStudentBlockStatus(userId);
            }catch(error){
                throw new Error((error as Error)?.message);
            }
        }
    }
}