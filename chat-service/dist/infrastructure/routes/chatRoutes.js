"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("../../presentation/controllers");
const jwtMiddleware_1 = require("../../_lib/common/middlewares/jwtMiddleware");
const chatRoutes = (dependencies) => {
    const { creatChat, createMessage, getChatsByUserId, getMessagesByChatId } = (0, controllers_1.controllers)(dependencies);
    const router = (0, express_1.Router)();
    router.route("/")
        .post(creatChat);
    router.route("/message")
        .post(jwtMiddleware_1.jwtMiddleware, createMessage);
    router.route("/chats")
        .get(jwtMiddleware_1.jwtMiddleware, getChatsByUserId);
    router.route("/listmessages/:chatId")
        .get(jwtMiddleware_1.jwtMiddleware, getMessagesByChatId);
    return router;
};
exports.chatRoutes = chatRoutes;
