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
const editUserProfileConsumer_1 = require("../../database/mongoDb/repositories/editUserProfileConsumer");
exports.default = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, editUserProfileConsumer_1.editUserProfileConsumer)(userData);
    }
    catch (error) {
        console.error(error === null || error === void 0 ? void 0 : error.message, "error in the kafka consumer");
    }
});
