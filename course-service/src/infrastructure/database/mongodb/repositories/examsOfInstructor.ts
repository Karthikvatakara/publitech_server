import { assessmentEntity } from "../../../../domain/entities/assessmentEntity";
import { Assessment } from "../models/assessment";

export const examsOfInstructor = async( instructorId: string ): Promise<assessmentEntity[] | null> => {
    try{    
        const exams = await Assessment.find({instructorId})
                        .populate({
                            path: "courseId",
                            select: 'title',
                            model: "courses"
                        })
                        .sort({ createdAt: -1})
                        

        return exams;

    }catch(error) {
        throw new Error((error as Error)?.message);
    }
}