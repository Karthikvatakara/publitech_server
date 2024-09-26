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
exports.getCourseController = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const getCourseController = (dependencies) => {
    const { useCases: { getSingleCourseUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log("🚀 ~ returnasync ~ id:haiiiiiiiiiiiiiiiiiiiiii");
            const { id } = req.params;
            if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
                throw new Error("objectid is not valid");
            }
            const selected = yield getSingleCourseUseCase(dependencies).execute(id);
            res.status(200).json({ success: true, data: selected, message: "course retrieved succesfully" });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.getCourseController = getCourseController;
