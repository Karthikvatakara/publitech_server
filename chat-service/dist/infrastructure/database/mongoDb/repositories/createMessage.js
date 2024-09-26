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
exports.createMessage = void 0;
const models_1 = require("../models");
const createMessage = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { chatId } = data;
        const newMessage = yield models_1.message.create(data);
        const populatedMessage = yield models_1.message.findById(newMessage._id)
            .populate('sender', 'username profile.avatar')
            .populate('chatId');
        yield models_1.chat.findByIdAndUpdate(chatId, { latestMessage: newMessage._id });
        return populatedMessage;
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.createMessage = createMessage;
