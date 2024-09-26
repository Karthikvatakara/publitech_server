"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveChat = void 0;
const chat_1 = require("../models/chat");
const saveChat = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const chatData = {
            users: [data.userId, data.instructorRef],
            isGroupChat: false
        };
        const isChatExist = yield chat_1.chat.findOne({
            users: {
                $all: [data.userId, data.instructorRef]
            }
        });
        if (isChatExist) {
            return null;
        }
        const newChat = yield chat_1.chat.create(chatData);
        return newChat;
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.saveChat = saveChat;
