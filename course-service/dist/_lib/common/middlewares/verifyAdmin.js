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
exports.verifyAdmin = void 0;
const ErrorResponse_1 = __importDefault(require("../error/ErrorResponse"));
const models_1 = require("../../../infrastructure/database/mongodb/models");
const verifyAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user) {
        return ErrorResponse_1.default.unAuthorized("user is not logged in");
    }
    const user = yield models_1.User.findById(req.user._id);
    console.log("🚀 ~ verifyAdmin ~ user:", user === null || user === void 0 ? void 0 : user.role);
    if (!user) {
        return ErrorResponse_1.default.notFound("user not found");
    }
    if (user.role !== "admin") {
        return ErrorResponse_1.default.unAuthorized("login as admin");
    }
    next();
});
exports.verifyAdmin = verifyAdmin;
