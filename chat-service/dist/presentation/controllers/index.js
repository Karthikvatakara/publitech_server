"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = void 0;
const createChatController_1 = require("./createChatController");
const createMessageController_1 = require("./createMessageController");
const getChatByUserIdController_1 = require("./getChatByUserIdController");
const getMessagesByChatIdController_1 = require("./getMessagesByChatIdController");
const controllers = (dependencies) => {
    return {
        creatChat: (0, createChatController_1.createChatController)(dependencies),
        createMessage: (0, createMessageController_1.createMessageController)(dependencies),
        getChatsByUserId: (0, getChatByUserIdController_1.getChatByUserIdController)(dependencies),
        getMessagesByChatId: (0, getMessagesByChatIdController_1.getMessagesByChatIdController)(dependencies)
    };
};
exports.controllers = controllers;
