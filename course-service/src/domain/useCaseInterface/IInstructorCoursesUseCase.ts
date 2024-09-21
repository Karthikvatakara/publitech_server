import { CourseEntity } from "../entities";

export interface IInstructorCoursesUseCase {
    execute:(instructorId: string) => Promise<CourseEntity[] | null>
}