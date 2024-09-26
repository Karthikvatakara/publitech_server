import { assessmentEntity } from "../../../../domain/entities/assessmentEntity";
import { Assessment } from "../models/assessment";

export const updateExam = async( examId: string, data: assessmentEntity ) : Promise<assessmentEntity | null> => {
    try{
        const updatedExam = await Assessment.findByIdAndUpdate( examId, data, { new : true });

        if( !updatedExam ) {
            throw new Error("exam not found");
        }

        return updatedExam
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}