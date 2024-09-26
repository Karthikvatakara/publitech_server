import { UserEntity } from "../entities/userEntity";

export interface IToggleStudentBlockStatusUseCase {
    execute(userId: string) : Promise<UserEntity | null>
}