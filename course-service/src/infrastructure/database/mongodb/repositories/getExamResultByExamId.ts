import { resultEntity } from "../../../../domain/entities/resultEntity";
import { Result } from "../models/result";

export const getExamResultByExamId = async( assessmentRef: string ) :Promise < resultEntity | null >=> {
    try{
        console.log("??????::::::::::::::",assessmentRef)
        const result = await Result.findOne({ assessmentRef });
        console.log("🚀 ~ getExamResultByExamId ~ result:", result)

        return result

    }catch(error){
        throw new Error((error as Error)?.message);
    }
}