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
exports.blockInstructor = void 0;
const mongodb_1 = require("mongodb");
const User_1 = require("../models/User");
const blockInstructor = (id, action) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = new mongodb_1.ObjectId(id);
        console.log("🚀 ~ blockInstructor ~ userId:", userId);
        const isBlocked = action === "block";
        const updated = yield User_1.User.findOneAndUpdate({ _id: userId }, { $set: { isBlocked } }, { new: true });
        return updated;
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.blockInstructor = blockInstructor;
