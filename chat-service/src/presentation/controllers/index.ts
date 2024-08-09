import { IDependency } from "../../application/interfaces/IDependency";
import { createChatController } from "./createChatController";
import { createMessageController } from "./createMessageController";
import { getChatByUserIdController } from "./getChatByUserIdController";
import { getMessagesByChatIdController } from "./getMessagesByChatIdController";

export const controllers = (dependencies: IDependency) => {
    return {
        creatChat : createChatController(dependencies),
        createMessage : createMessageController(dependencies),
        getChatsByUserId : getChatByUserIdController(dependencies),
        getMessagesByChatId : getMessagesByChatIdController(dependencies)
    }
}