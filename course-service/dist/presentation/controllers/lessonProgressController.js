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
exports.lessonProgressController = void 0;
const lessonProgressController = (dependencies) => {
    const { useCases: { lessonProgressUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { userId, courseId, lessonId, timeWatched, totalDuration } = req.body;
            // console.log("🚀 ~ returnasync ~ totalDuration:", totalDuration)
            // console.log("🚀 ~ returnasync ~ timeWatched:", timeWatched)
            // console.log("🚀 ~ returnasync ~ courseId:", courseId)
            // console.log("🚀 ~ returnasync ~ userId:", userId)
            // console.log("🚀 ~ returnasync ~ lessonId:", lessonId)
            const progressData = yield lessonProgressUseCase(dependencies).execute(userId, courseId, lessonId, timeWatched, totalDuration);
            res.status(200).json({ success: true, message: " progress updated succesfully" });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.lessonProgressController = lessonProgressController;
