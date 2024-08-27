import { resultEntity } from "../../../../domain/entities/resultEntity";
import { Result } from "../models/result";

export const fetchExamResultById = async( resultId: string ) : Promise<resultEntity | null> => {
    console.log("🚀 ~ fetchExamResultById ~ resultId:", resultId)
    try{
        const existingResut = await Result.findById(resultId);

        return existingResut;
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}