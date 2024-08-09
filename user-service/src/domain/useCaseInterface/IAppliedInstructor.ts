import { UserEntity } from "../entities/userEntity";

export interface IAppliedInstructorUseCase {
    execute(page: number, limit:number, status: string, search: string):Promise<{instructors:UserEntity[], totalCount: number, totalPages: number, currentPage: number}>
}