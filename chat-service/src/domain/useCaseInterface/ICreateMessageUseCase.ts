import { messageEntity } from "../entities";

export interface ICreateMessageUseCase {
    execute( data: messageEntity ) : Promise< messageEntity | null >
}