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
exports.approveInstructorController = void 0;
const instructorApprovalProducer_1 = __importDefault(require("../../infrastructure/kafka/producers/instructorApprovalProducer"));
const instructorNotificationProducer_1 = __importDefault(require("../../infrastructure/kafka/producers/instructorNotificationProducer"));
const approveInstructorController = (dependecies) => {
    const { useCases: { approveInstructorUseCase } } = dependecies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        let { instructorId, reason } = req.body;
        console.log("🚀 ~ returnasync ~ req.body:", req.body);
        try {
            if (!instructorId) {
                throw new Error("instructor id is not provided");
            }
            if (!reason)
                reason = "null";
            const approvedInstructor = yield approveInstructorUseCase(dependecies).execute(instructorId, reason);
            if (!approvedInstructor) {
                throw new Error("the instructor status is not updated");
            }
            // sending edited document to auth service
            (0, instructorNotificationProducer_1.default)({ instructor: approvedInstructor, reason }, "notification-service-topic");
            // sending data to corresponding services
            (0, instructorApprovalProducer_1.default)(approvedInstructor, "auth-service-topic");
            (0, instructorApprovalProducer_1.default)(approvedInstructor, "course-service-topic");
            res.status(200).json({ success: true, data: approvedInstructor, message: "instuctor approved" });
        }
        catch (error) {
            console.error("error in controlllers", error);
            next(error);
        }
    });
};
exports.approveInstructorController = approveInstructorController;
