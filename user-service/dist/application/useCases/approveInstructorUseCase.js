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
exports.approveInstructorUseCase = void 0;
const approveInstructorUseCase = (dependency) => {
    const { repositories: { approveInstructor } } = dependency;
    return {
        execute: (instructorId, reason) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                console.log("🚀 ~ execute:async ~ reason:==================", reason);
                return yield approveInstructor(instructorId, reason);
            }
            catch (error) {
                console.error(error, "error in the approveinstructor usecase");
                throw new Error(error === null || error === void 0 ? void 0 : error.message);
            }
        })
    };
};
exports.approveInstructorUseCase = approveInstructorUseCase;
