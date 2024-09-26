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
exports.createExamUseCase = void 0;
const createExamUseCase = (dependencies) => {
    const { repositories: { createExam } } = dependencies;
    return {
        execute: (data) => __awaiter(void 0, void 0, void 0, function* () {
            console.log("🚀 ~ execute:async ~ data: in usecase createexam", data);
            try {
                return yield createExam(data);
            }
            catch (error) {
                throw new Error(error === null || error === void 0 ? void 0 : error.message);
            }
        })
    };
};
exports.createExamUseCase = createExamUseCase;
