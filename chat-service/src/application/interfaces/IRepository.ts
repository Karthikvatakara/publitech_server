import { chatEntity, messageEntity } from "../../domain/entities";

export interface IRepository {
    createChat:( data: chatEntity ) =>  Promise< chatEntity | null >
    createMessage:( data: messageEntity ) =>  Promise< messageEntity | null >
    getChatByUserId: ( userId: string ) => Promise< chatEntity[] | null>
    getMessagesByChatId: ( chatId: string) => Promise< messageEntity[] | null>
}