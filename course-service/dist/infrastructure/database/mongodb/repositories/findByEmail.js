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
exports.findByEmail = void 0;
const models_1 = require("../models");
const findByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingUser = yield models_1.User.findOne({ email: email });
        console.log("the existing sssss is", existingUser);
        // if(!existingUser){
        //     console.log("🚀 ~ findByEmail ~ existingUser:", existingUser)
        //     throw ErrorResponse.unAuthorized("email not exist");
        // }
        return existingUser;
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.findByEmail = findByEmail;
