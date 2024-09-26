import { CourseEntity } from "../entities";

export interface IGetAllCourseOfInstructorUseCase {
    execute:( id: string, page: number, limit: number, search: string,  stage: string) => Promise<{courses: CourseEntity[], totalPages: number, currentPage: number} | null>
}