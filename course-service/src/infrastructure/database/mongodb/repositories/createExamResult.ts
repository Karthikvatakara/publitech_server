import { resultEntity } from "../../../../domain/entities/resultEntity";
import { Result } from "../models/result";

export const createExamResult = async( data: resultEntity ) : Promise<resultEntity | null> => {
    try{
        const result = await Result.create(data);

        return result;
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}