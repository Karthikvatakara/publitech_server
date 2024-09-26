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
// import { ChatUpdateData } from "../../../domain/entities/chatUpdateEntity";
const __1 = require("..");
exports.default = (data, topic) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const targetTopic = topic || "default-service";
        yield __1.producer.connect();
        const messages = {
            topic: targetTopic,
            messages: [
                {
                    key: "updateChatSubscription",
                    value: JSON.stringify(data)
                }
            ]
        };
        yield __1.producer.send(messages);
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
    finally {
        __1.producer.disconnect();
    }
});
