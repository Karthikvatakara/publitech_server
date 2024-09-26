import { chatEntity } from "../entities";

export interface IGetChatByUserIdUseCase {
    execute(UserId: string) : Promise< chatEntity[] | null>
}