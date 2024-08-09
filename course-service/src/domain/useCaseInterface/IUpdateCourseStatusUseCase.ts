import { CourseEntity } from "../entities";

export interface IUpdateCourseStatusUseCase {
    execute:(courseId:string,data:CourseEntity) => Promise<CourseEntity | null>
}