import { UserEntity } from "../entities/userEntity";

export interface IGetAllStudentsUseCase {
    execute( page: number, limit: number, status: string, search: string): Promise<{students: UserEntity[], totalPages: number, totalCount: number}>
}