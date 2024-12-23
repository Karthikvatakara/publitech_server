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
exports.verifyInstructor = void 0;
const errorResponse_1 = __importDefault(require("../error/errorResponse"));
const User_1 = require("../../../infrastructure/database/mongoDb/models/User");
const verifyInstructor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user) {
        return errorResponse_1.default.unAuthorized("user is not logged in");
    }
    console.log(req.user._id, "????????????????????????????????");
    const user = yield User_1.User.findById((req.user._id));
    console.log("🚀 ~ verifyInstructor ~ user:dddddddddddddddddddddd", user);
    if (!user) {
        return errorResponse_1.default.unAuthorized("user not exist");
    }
    if (user.isBlocked) {
        return errorResponse_1.default.unAuthorized("you are blocked");
    }
    if (user.role !== "instructor") {
        return errorResponse_1.default.unAuthorized("user is not instructor");
    }
    next();
});
exports.verifyInstructor = verifyInstructor;
