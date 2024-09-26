import { resultEntity } from "../../../../domain/entities/resultEntity";
import { Result } from "../models/result";

export const checkResultOfAssessmentAndUserId = async( assessmentRef: string, userRef: string ) :Promise< resultEntity | null> => {
    try{

        const existingResult = await Result.findOne({assessmentRef, userRef});

        return existingResult;
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}