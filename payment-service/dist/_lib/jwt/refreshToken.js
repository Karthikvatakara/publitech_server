"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRefreshToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateRefreshToken = (payload) => {
    try {
        const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
        if (!refreshTokenSecret) {
            throw new Error("refresh token secret is not provided");
        }
        const { _id, email, role } = payload;
        return jsonwebtoken_1.default.sign({ _id, email, role }, refreshTokenSecret, { expiresIn: "30d" });
    }
    catch (error) {
        console.error(error, "error occured in genereate refreshtoken");
        throw new Error((error === null || error === void 0 ? void 0 : error.message) || "failed to generate refresh token");
    }
};
exports.generateRefreshToken = generateRefreshToken;
