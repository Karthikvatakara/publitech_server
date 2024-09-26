import { UserEntity } from "../entities/userEntity"

export interface IFindInstructorByIdUseCase {
    execute(instructorId: string): Promise<UserEntity | null>
}