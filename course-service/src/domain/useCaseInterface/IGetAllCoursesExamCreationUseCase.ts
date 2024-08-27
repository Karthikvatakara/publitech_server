import { CourseEntity } from "../entities";

export interface IGetAllCoursesExamCreationUseCase {
    execute:( instructorRef: string) => Promise<CourseEntity[] | null>
}