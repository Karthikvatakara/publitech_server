import { LessonProgress } from "../entities";

export interface IGetLessonProgressUseCase {
    execute:(userId: string, lessonId: string, courseId: string ) => Promise<LessonProgress | null>
}