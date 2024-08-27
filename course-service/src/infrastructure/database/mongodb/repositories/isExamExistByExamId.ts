import { assessmentEntity } from "../../../../domain/entities/assessmentEntity";
import { Assessment } from "../models/assessment";

export const isExamExistByExamId = async( examId: string ): Promise<assessmentEntity | null> => {
    try{
        const existingExam = await Assessment.findById(examId);

        return existingExam;
        
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}