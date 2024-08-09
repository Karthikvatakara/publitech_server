import { chatEntity } from "../entities";

export interface ICreateChatUseCase {
    execute( data: chatEntity) : Promise< chatEntity | null>;
}