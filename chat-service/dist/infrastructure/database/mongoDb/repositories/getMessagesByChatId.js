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
exports.getMessagesByChatId = void 0;
const models_1 = require("../models");
const mongoose_1 = require("mongoose");
const getMessagesByChatId = (chatId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messages = yield models_1.message.find({ chatId: new mongoose_1.Types.ObjectId(chatId) })
            .populate("sender")
            .sort({ createdAt: 1 });
        return messages;
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.getMessagesByChatId = getMessagesByChatId;
