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
exports.approveInstructor = void 0;
const User_1 = require("../models/User");
const { ObjectId } = require("mongodb");
const approveInstructor = (instructorId, reason) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let status = reason === "null" ? "approved" : "rejected";
        let role = reason !== "null" ? "student" : "instructor";
        let updateObject = {
            stage: status,
            role: role,
        };
        if (reason !== "null")
            updateObject.rejectreason = reason;
        const updatedDoc = yield User_1.User.findByIdAndUpdate({ _id: instructorId }, {
            $set: updateObject,
        }, { new: true });
        if (!updatedDoc) {
            throw new Error("error occured in updating instructor");
        }
        console.log("🚀 ~ approveInstructor ~ updatedDoc:", updatedDoc);
        return updatedDoc;
    }
    catch (error) {
        console.error(error, "error in the approveInstructor repoository");
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.approveInstructor = approveInstructor;
