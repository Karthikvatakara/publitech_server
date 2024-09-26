import { CourseEntity } from "../../domain/entities";

export interface ICourseStatusChangeByInstructorUseCase {
    execute:( id: string, status:"block" | "unblock") => Promise<CourseEntity | null >
}