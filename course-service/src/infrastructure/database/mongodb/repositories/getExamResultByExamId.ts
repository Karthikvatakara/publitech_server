import { resultEntity } from "../../../../domain/entities/resultEntity";
import { Result } from "../models/result";

export const getExamResultByExamId = async( assessmentRef: string, userId: string ) :Promise < resultEntity | null >=> {
    try{
        console.log("??????::::::::::::::",assessmentRef)
        const result = await Result.findOne({ assessmentRef,userRef: userId });
        console.log("🚀 ~ getExamResultByExamId ~ result:", result)

        return result

    }catch(error){
        throw new Error((error as Error)?.message);
    }
}