import { assessmentEntity } from "../../../../domain/entities/assessmentEntity";
import { Assessment } from "../models/assessment";

export const isExamExist  = async( courseId: string ):Promise<assessmentEntity | null> => {
    try{
        const isExamPresent = await Assessment.findOne({courseId});

    
        return isExamPresent;

    }catch(error){
        throw new Error((error as Error)?.message);
    }
}