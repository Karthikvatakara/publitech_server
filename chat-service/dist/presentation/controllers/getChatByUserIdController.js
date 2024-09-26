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
exports.getChatByUserIdController = void 0;
const getChatByUserIdController = (dependencies) => {
    const { useCases: { getChatByUserIdUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            console.log("hello");
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a._id;
            const getChats = yield getChatByUserIdUseCase(dependencies).execute(userId);
            if (!getChats) {
                throw new Error(" chats not retrieved");
            }
            res.status(200).json({ success: true, data: getChats, message: "chats retrieved successfully" });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.getChatByUserIdController = getChatByUserIdController;
