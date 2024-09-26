import { resultEntity } from "../../../../domain/entities/resultEntity";
import { Result } from "../models/result";

export const fetchExamResultById = async( resultId: string ) : Promise<resultEntity | null> => {
    console.log("🚀 ~ fetchExamResultById ~ resultId:", resultId)
    try{
        const existingResult = await Result.findById(resultId)
        .populate({
            path: 'userRef', 
            select: 'username email profile contact',
        })
        .populate({
            path: 'assessmentRef',
            select: 'courseId',
        })

        return existingResult;
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}