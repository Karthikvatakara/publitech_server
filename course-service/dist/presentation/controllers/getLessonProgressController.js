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
exports.getLessonProgressController = void 0;
const getLessonProgressController = (dependencies) => {
    const { useCases: { getLessonProgressUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { userId, courseId, lessonId } = req.params;
            const lessonProgress = yield getLessonProgressUseCase(dependencies).execute(userId, courseId, lessonId);
            res.status(200).json({
                success: true,
                data: lessonProgress || {},
                message: "lessonProgress updated succesfully"
            });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.getLessonProgressController = getLessonProgressController;
