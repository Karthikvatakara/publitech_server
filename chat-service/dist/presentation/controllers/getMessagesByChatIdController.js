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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessagesByChatIdController = void 0;
const errorResponse_1 = __importDefault(require("../../_lib/common/error/errorResponse"));
const getMessagesByChatIdController = (dependencies) => {
    const { useCases: { getMessagesByChatIdUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            const chatId = (_a = req.params) === null || _a === void 0 ? void 0 : _a.chatId;
            const result = yield getMessagesByChatIdUseCase(dependencies).execute(chatId);
            if (!result) {
                throw errorResponse_1.default.internalError("no chat is available");
            }
            res.status(200).json({ success: true, data: result, message: " messages retrieved succesfully" });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.getMessagesByChatIdController = getMessagesByChatIdController;
