export interface ILessonProgressUseCase {
    execute:(userId: string, courseId: string, lessonId: string, timeWatched: number, totalDuration: number) => Promise<void>
}