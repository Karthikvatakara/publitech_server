import { Router } from "express";
import { controllers } from "../../presentation/controllers";
import { IDependency } from "../../application/interfaces/IDependency";
import { jwtMiddleware } from "../../_lib/common/middlewares/jwtMiddleware";

export const chatRoutes = ( dependencies: IDependency) => {
    const { creatChat, createMessage, getChatsByUserId, getMessagesByChatId } = controllers(dependencies);

    const router = Router();

    router.route("/")
        .post(creatChat);
    
    router.route("/message")
        .post(jwtMiddleware,createMessage);

    router.route("/chats")
        .get(jwtMiddleware,getChatsByUserId);
    
    router.route("/listmessages/:chatId")
        .get(jwtMiddleware,getMessagesByChatId)
        
    return router
}