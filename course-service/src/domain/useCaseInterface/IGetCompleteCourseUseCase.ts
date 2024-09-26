import { CourseEntity } from "../entities";

export interface IGetCompleteCoursUseCase {
    execute:(page: number, limit: number, search: string, filter: string, sort: string) => Promise<{ courses: CourseEntity[], total: number}>
}