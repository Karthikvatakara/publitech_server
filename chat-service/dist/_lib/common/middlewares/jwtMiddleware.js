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
exports.jwtMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwt_1 = require("../../jwt");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const jwtMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { access_Token, refresh_Token } = req.cookies;
        if (!access_Token && !refresh_Token) {
            console.log("jjjj");
            return next();
        }
        let user;
        if (access_Token) {
            try {
                user = jsonwebtoken_1.default.verify(access_Token, process.env.ACCESS_TOKEN_SECRET);
            }
            catch (error) {
                console.error("invalid access token", error);
            }
        }
        if (!user && refresh_Token) {
            try {
                console.log("refreshtoken");
                user = jsonwebtoken_1.default.verify(refresh_Token, process.env.REFRESH_TOKEN_SECRET);
                if (user) {
                    const newAccessToken = (0, jwt_1.generateAccessToken)(user);
                    res.cookie("access_Token", newAccessToken, {
                        httpOnly: true,
                    });
                    // req.user = user;
                    // console.log("🚀 ~ jwtMiddleware ~ user: second refresh token", user)
                    // next();
                }
            }
            catch (error) {
                console.error("invalid refredh token", error);
            }
        }
        if (user) {
            console.log("user is here ");
            req.user = user;
            next();
        }
    }
    catch (error) {
        console.error("error in jwtmiddleware", error);
        next(error);
    }
});
exports.jwtMiddleware = jwtMiddleware;
