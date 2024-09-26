import { CourseEntity } from "../entities";

export interface IUpdateCourseUseCase {
    execute:(courseId:string,data:CourseEntity) => Promise<CourseEntity | null>;
}