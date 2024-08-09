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
exports.blockCategory = void 0;
const models_1 = require("../models");
const mongodb_1 = require("mongodb");
const blockCategory = (id, action) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isBlocked = action === "block";
        const categoryId = new mongodb_1.ObjectId(id);
        const updated = yield models_1.category.findOneAndUpdate({ _id: categoryId }, { $set: { isBlocked: isBlocked } }, { new: true });
        return updated;
    }
    catch (error) {
        throw new Error((error === null || error === void 0 ? void 0 : error.message) || "error ocuured in block category repository");
    }
});
exports.blockCategory = blockCategory;
