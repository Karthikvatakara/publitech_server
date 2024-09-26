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
exports.createCategoryController = void 0;
const createCategoryController = (dependencies) => {
    const { useCases: { createCategoryUseCase } } = dependencies;
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const data = req.body;
            const { title, imageUrl } = data;
            const smallLetter = title.toLowerCase().trim();
            data.title = smallLetter;
            const newCategory = yield createCategoryUseCase(dependencies).execute(data);
            if (!newCategory) {
                throw new Error("category not created");
            }
            res.status(200).json({ success: true, data: newCategory, message: "category created succesfully" });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.createCategoryController = createCategoryController;
