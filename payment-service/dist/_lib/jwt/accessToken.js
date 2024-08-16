"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateAccessToken = (payload) => {
    try {
        const accesstokenSecret = process.env.ACCESS_TOKEN_SECRET;
        if (!accesstokenSecret) {
            throw new Error("access token secret is not defined");
        }
        const { _id, email, role } = payload;
        return jsonwebtoken_1.default.sign({ _id, email, role }, accesstokenSecret, { expiresIn: '10m' });
    }
    catch (error) {
        throw new Error((error === null || error === void 0 ? void 0 : error.message) || "failed to generate access token");
    }
};
exports.generateAccessToken = generateAccessToken;
