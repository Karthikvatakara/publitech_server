import { EnrollmentEntity } from "../../../../domain/entities";
import { Enrollment } from "../models";
import { LessonProgress } from "../../../../domain/entities";

export const getLessonProgress = async( userId: string, courseId: string, lessonId: string ) : Promise<LessonProgress | null> => {
    console.log("🚀 ~ getLessonProgress ~ courseId:", courseId)
    console.log("🚀 ~ getLessonProgress ~ lessonId:", lessonId)
    console.log("🚀 ~ getLessonProgress ~ userId:", userId)
    try{
        const enrollment = await Enrollment.findOne({userId, courseId})
        if( !enrollment ) {
            // throw new Error("no enrollment found")
            return null
        }
        
        const lessonProgess = enrollment.progress?.lessonProgress?.find((lp) => lp.lessonId.toString() === lessonId);

       
        
        return lessonProgess || null;
    }catch(error){
        throw new Error((error as Error)?.message);
    }
}