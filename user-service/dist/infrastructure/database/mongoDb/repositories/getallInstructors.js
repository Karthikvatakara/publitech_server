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
exports.getallInstructors = void 0;
const User_1 = require("../models/User");
const getallInstructors = (page, limit, status, search) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = { role: "instructor" };
        if (status === "blocked") {
            query.isBlocked = true;
        }
        else if (status === "unblocked") {
            query.isBlocked = false;
        }
        if (search) {
            query.$or = [
                { email: { $regex: search, $options: "i" } },
                { profession: { $regex: search, $options: "i" } }
            ];
        }
        const totalCount = yield User_1.User.countDocuments(query);
        const totalPages = Math.ceil(totalCount / limit);
        const instructors = yield User_1.User.find(query)
            .skip((page - 1) * limit)
            .limit(limit)
            .lean();
        return { instructors, totalPages, totalCount };
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.getallInstructors = getallInstructors;
