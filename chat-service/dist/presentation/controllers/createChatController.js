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
exports.createChatController = void 0;
const createChatController = (dependencies) => {
    const { useCases: { createChatUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = req.body;
            const createdChat = yield createChatUseCase(dependencies).execute(data);
            if (!createdChat) {
                throw new Error("chat not created");
            }
            res.status(200).json({ success: true, data: createdChat, message: "chat created succesfully" });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.createChatController = createChatController;
