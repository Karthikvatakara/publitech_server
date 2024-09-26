import { assessmentEntity } from "../../../../domain/entities/assessmentEntity";
import { Assessment } from "../models/assessment";

export const createExam = async( data: assessmentEntity ) :Promise< assessmentEntity | null> => {
    try{
        const { courseId } = data;
        console.log("🚀 ~ createExam ~ courseId: in repository", courseId)

        const isExist = await Assessment.findOne({ courseId });

        console.log("🚀 ~ createExam ~ isExist:", isExist)

        if(isExist) {
            throw new Error("exam already exist for this course")
        }

        const createdExam = await Assessment.create(data);
        console.log("🚀 ~ createExam ~ createdExam:", createdExam)

            return createdExam;

    }catch(error){
        throw new Error((error as Error)?.message)
    }
}