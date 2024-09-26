import { messageEntity } from "../entities";

export interface IGetMessagesByChatIdUseCase {
    execute(chatId: string) : Promise<messageEntity[] | null>
}