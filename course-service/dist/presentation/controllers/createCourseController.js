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
exports.createCourseController = void 0;
const ErrorResponse_1 = __importDefault(require("../../_lib/common/error/ErrorResponse"));
const mongoose_1 = require("mongoose");
const createCourseController = (dependencies) => {
    const { useCases: { createCourseUseCase } } = dependencies;
    const toObjectId = (id) => new mongoose_1.Types.ObjectId(id);
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = req.body;
            console.log("Received Data:", JSON.stringify(data, null, 2));
            data.categoryRef = toObjectId(data.categoryRef);
            data.instructorRef = toObjectId(data.instructorRef);
            // if (data.isPaid !== undefined) {
            //     data.pricing.type = data.isPaid ? 'paid' : 'free';
            // }
            // Additional logging to check required fields
            if (!data.trial.title || !data.trial.description || !data.trial.thumbnail || !data.trial.video) {
                throw new Error("Trial data is missing required fields");
            }
            if (data.lessons) {
                data.lessons.forEach((lesson, index) => {
                    if (!lesson.title || !lesson.description || !lesson.thumbnail || !lesson.video) {
                        throw new Error(`Lesson ${index + 1} is missing required fields`);
                    }
                });
            }
            console.log("Processed Data:", JSON.stringify(data, null, 2));
            const createdCourse = yield createCourseUseCase(dependencies).execute(data);
            console.log("🚀 ~ returnasync ~ createdCourse:", createdCourse);
            if (!createdCourse) {
                throw ErrorResponse_1.default.internalError("course not created");
            }
            res.status(200).json({ success: true, data: createdCourse, message: "user created succesfully" });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.createCourseController = createCourseController;
