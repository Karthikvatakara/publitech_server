import { UserEntity } from "../entities/userEntity";

export interface IGetAllInstructorUseCase {
    execute( page: number, limit: number, status: string, search: string):Promise<{ instructors: UserEntity[], totalPages: number, totalCount: number }>
}