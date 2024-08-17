import { chatEntity } from "../entities/chatEntity";

export interface ISaveChatUseCase {
    execute: (data: { userId: string, instructorRef: string}) => Promise< chatEntity | null>
}