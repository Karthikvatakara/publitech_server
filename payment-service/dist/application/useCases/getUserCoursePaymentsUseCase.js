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
exports.getUserCoursePaymentsUseCase = void 0;
const getUserCoursePaymentsUseCase = (dependencies) => {
    const { repositories: { getUserCoursePayments } } = dependencies;
    return {
        execute: (page, limit, status, search, userId) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                return yield getUserCoursePayments(page, limit, status, search, userId);
            }
            catch (error) {
                throw new Error(error === null || error === void 0 ? void 0 : error.message);
            }
        })
    };
};
exports.getUserCoursePaymentsUseCase = getUserCoursePaymentsUseCase;
