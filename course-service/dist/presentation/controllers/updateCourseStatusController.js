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
exports.updateCourseStatusController = void 0;
const updateCourseStatusController = (dependencies) => {
    const { useCases: { updateCourseStatusUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log("aaaaaaaaaaaaaaaaaaa");
            const { courseId } = req.params;
            const data = req.body;
            console.log("🚀 ~ returnasync ~ courseId:", courseId);
            const updatedStatus = yield updateCourseStatusUseCase(dependencies).execute(courseId, req.body);
            if (!updatedStatus) {
                throw new Error("status not updated");
            }
            res.status(200).json({ success: true, data: updatedStatus, message: "status updated succesfully" });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.updateCourseStatusController = updateCourseStatusController;
