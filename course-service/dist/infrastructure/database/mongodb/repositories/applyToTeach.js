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
const models_1 = require("../models");
exports.default = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, profession, profileDescription, github, linkedIn, mobile } = data;
        const updatedUser = yield models_1.User.findOneAndUpdate({ email: email }, { $set: {
                profession: profession,
                profileDescription: profileDescription,
                'contact.socialMedia.github': github,
                'contact.socialMedia.linkedIn': linkedIn,
                mobile: mobile,
                role: "student",
                stage: "applied"
            }
        }, { new: true });
        if (!updatedUser) {
            console.log("error occurd in applyto teach consumer");
            throw new Error("error occured in the updated user ");
        }
        return updatedUser;
    }
    catch (error) {
        console.error(error, "error in the applyTOTeach repositories");
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
