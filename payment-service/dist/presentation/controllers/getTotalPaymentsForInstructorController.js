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
exports.getTotalPaymentsForInstructorController = void 0;
const errorResponse_1 = __importDefault(require("../../_lib/common/error/errorResponse"));
const getTotalPaymentsForInstructorController = (dependencies) => {
    const { useCases: { getTotalPaymentsForInstructorUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            const instructorId = (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a._id;
            const getTotalPayments = yield getTotalPaymentsForInstructorUseCase(dependencies).execute(instructorId);
            if (!getTotalPayments) {
                throw errorResponse_1.default.notFound("instructor Payment not found");
            }
            ;
            return res.status(200).json({ success: true, data: getTotalPayments, message: "payment fetched succesfully" });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.getTotalPaymentsForInstructorController = getTotalPaymentsForInstructorController;
