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
exports.generateRefreshToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateRefreshToken = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const secret = process.env.REFRESH_TOKEN_SECRET;
        if (!secret) {
            throw new Error("refresh token secret is not provided");
        }
        const { _id, email, role } = payload;
        return jsonwebtoken_1.default.sign({ _id, email, role }, secret, { expiresIn: '30d' });
    }
    catch (error) {
        throw new Error((error === null || error === void 0 ? void 0 : error.message) || "error occured in generate refreshtoken");
    }
});
exports.generateRefreshToken = generateRefreshToken;
