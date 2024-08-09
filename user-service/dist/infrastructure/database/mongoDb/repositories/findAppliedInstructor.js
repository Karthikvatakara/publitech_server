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
exports.findAppliedInstructor = void 0;
const User_1 = require("../models/User");
const findAppliedInstructor = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (page = 1, limit = 5, status = "all", search = "") {
    try {
        const skip = (page - 1) * limit;
        let query = { stage: { $ne: "not-requested" } };
        if (status !== "all") {
            query.stage = status;
        }
        if (search) {
            query.$or = [
                { email: { $regex: search, $options: 'i' } },
                { proffession: { $regex: search, $options: 'i' } }
            ];
        }
        const totalCount = yield User_1.User.countDocuments(query);
        const instructors = yield User_1.User.find(query).skip(skip).limit(limit).select('email profession profileDescription stage');
        return {
            instructors,
            totalCount,
            totalPages: Math.ceil(totalCount / limit),
            currentPage: page
        };
    }
    catch (error) {
        console.error(error, "error ocuured in the applied instructor repository");
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.findAppliedInstructor = findAppliedInstructor;
