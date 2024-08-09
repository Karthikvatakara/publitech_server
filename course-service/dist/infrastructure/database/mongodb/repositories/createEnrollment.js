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
exports.createEnrollment = void 0;
const enrollment_1 = require("../models/enrollment");
const createEnrollment = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(data, "data recieved in repocreateenrollment");
        const createEnrollment = yield enrollment_1.Enrollment.create(data);
        console.log("🚀 ~ createEnrollment ~ createEnrollment:", createEnrollment);
        return createEnrollment;
    }
    catch (error) {
        throw new Error((error === null || error === void 0 ? void 0 : error.message) || "error ocuured in createEnrollment repos");
    }
});
exports.createEnrollment = createEnrollment;
