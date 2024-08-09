import { CourseEntity } from "../entities";

export interface IGetAllCourseUseCase {
    execute:(id:string) => Promise<CourseEntity[] | null>
}