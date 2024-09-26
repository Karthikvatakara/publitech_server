import { CourseEntity } from "../entities";

export interface IGetCoursesToUser {
    execute:(params:{ search?: string, category?: string, sort?: string, page: number, limit: number}) => Promise< { courses:CourseEntity[], totalPages: number, currentPage: number} |null>
}