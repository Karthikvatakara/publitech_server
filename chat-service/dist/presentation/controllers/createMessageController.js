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
exports.createMessageController = void 0;
const errorResponse_1 = __importDefault(require("../../_lib/common/error/errorResponse"));
const createMessageController = (dependencies) => {
    const { useCases: { createMessageUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            const { content, chatId } = req.body;
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a._id;
            console.log("🚀 ~ returnasync ~ userId:", userId);
            if (!content || !chatId) {
                throw errorResponse_1.default.internalError("content and chatId is not provided");
            }
            const createdMessage = yield createMessageUseCase(dependencies).execute(req.body);
            if (!createdMessage) {
                throw new Error("message creation failed");
            }
            res.status(200).json({ success: true, data: createdMessage, message: " message creation failed" });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.createMessageController = createMessageController;
