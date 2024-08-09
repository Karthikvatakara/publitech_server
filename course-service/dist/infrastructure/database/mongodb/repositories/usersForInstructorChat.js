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
exports.usersForInstructorChat = void 0;
const mongoose_1 = require("mongoose");
const models_1 = require("../models");
const usersForInstructorChat = (instructorId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const objectId = new mongoose_1.Types.ObjectId(instructorId);
        const users = yield models_1.course.aggregate([
            // Match courses by the instructor
            {
                $match: {
                    instructorRef: objectId
                }
            },
            // Look up enrollments for these courses
            {
                $lookup: {
                    from: 'enrollments',
                    localField: '_id',
                    foreignField: 'courseId',
                    as: 'enrollments'
                }
            },
            // Unwind the enrollments array
            {
                $unwind: '$enrollments'
            },
            // Group by user ID to remove duplicates
            {
                $group: {
                    _id: '$enrollments.userId'
                }
            },
            // Look up user details
            {
                $lookup: {
                    from: 'users',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'userDetails'
                }
            },
            // Unwind the userDetails array
            {
                $unwind: '$userDetails'
            },
            // Project only the fields you need
            {
                $project: {
                    _id: '$userDetails._id',
                    username: '$userDetails.username',
                    email: '$userDetails.email',
                    avatar: '$userDetails.profile.avatar'
                }
            }
        ]);
        if (!users) {
            throw new Error("users not found");
        }
        return users;
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.usersForInstructorChat = usersForInstructorChat;
