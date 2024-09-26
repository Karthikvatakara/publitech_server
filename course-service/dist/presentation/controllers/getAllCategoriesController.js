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
exports.getAllCategoryController = void 0;
const getAllCategoryController = (dependencies) => {
    const { useCases: { getAllCategoryUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const allCategories = yield getAllCategoryUseCase(dependencies).execute();
            if (!allCategories) {
                throw new Error("categories not retreived");
            }
            res.status(200).json({ success: true, data: allCategories, message: "categories retrieved" });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.getAllCategoryController = getAllCategoryController;