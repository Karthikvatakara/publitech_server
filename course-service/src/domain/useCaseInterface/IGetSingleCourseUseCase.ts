import { CourseEntity } from "../entities"

export interface IGetSingleCourseUseCase {
    execute:(id:string) => Promise<CourseEntity | null>
}