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
exports.blockInstructorController = void 0;
const instructorStatusChange_1 = __importDefault(require("../../infrastructure/kafka/producers/instructorStatusChange"));
const blockInstructorController = (dependecies) => {
    const { useCases: { blockInstructorUseCase } } = dependecies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const { id, action } = req.body;
        console.log("🚀 ~ returnasync ~ id:", id);
        try {
            if (!id || !action) {
                throw new Error("id or action is not provided");
            }
            const updated = yield blockInstructorUseCase(dependecies).execute(id, action);
            if (!updated) {
                throw new Error("instructor status is not activated");
            }
            console.log("🚀 ~ returnasync ~ updated:", updated);
            // sending data to  services
            (0, instructorStatusChange_1.default)(updated, "auth-service-topic");
            (0, instructorStatusChange_1.default)(updated, "course-service-topic");
            res.status(200).json({ success: true, data: updated, message: "instructor status updated" });
        }
        catch (error) {
            console.error(error, "error ocuured in blockinstructor usecase");
            next(error);
        }
    });
};
exports.blockInstructorController = blockInstructorController;
