import { CourseEntity } from "../entities";

export interface ITopEnrollmentsUseCase {
    execute:()=> Promise<CourseEntity[] | null>
}