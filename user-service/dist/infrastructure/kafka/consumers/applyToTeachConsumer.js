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
const applyToTeach_1 = __importDefault(require("../../database/mongoDb/repositories/applyToTeach"));
exports.default = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appliedInstructor = yield (0, applyToTeach_1.default)(data);
        console.log(appliedInstructor, "data reahced in applytoteach consumer mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
    }
    catch (error) {
        console.error("error occured in the applyto teachconsumer");
    }
});
