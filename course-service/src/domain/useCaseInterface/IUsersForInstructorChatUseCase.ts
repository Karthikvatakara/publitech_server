import { UserEntity } from "../entities";

export interface IUsersForInstructorChatUseCase {
    execute:(instructorId: string) => Promise< UserEntity[] | null>
}