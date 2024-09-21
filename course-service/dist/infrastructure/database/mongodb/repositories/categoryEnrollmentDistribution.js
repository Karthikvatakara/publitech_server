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
exports.categoryEnrollmentDistribution = void 0;
const models_1 = require("../models");
const categoryEnrollmentDistribution = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const enrollmentByCourse = yield models_1.Enrollment.aggregate([
            { $group: { _id: "$courseId", count: { $sum: 1 } } }
        ]);
        console.log("🚀 ~ categoryEnrollmentDistribution ~ enrollmentByCourse:", enrollmentByCourse);
        const coursesWithCategories = yield models_1.course.aggregate([
            { $match: { _id: { $in: enrollmentByCourse.map(enrollment => enrollment._id) } } },
            { $lookup: {
                    from: "categories",
                    localField: 'categoryRef',
                    foreignField: '_id',
                    as: 'category'
                } },
            { $unwind: '$category' }
        ]);
        console.log("🚀 ~ categoryEnrollmentDistribution ~ coursesWithCategories:", coursesWithCategories);
        const enrollmentsByCategory = coursesWithCategories.reduce((acc, course) => {
            var _a;
            const categoryId = course.category._id.toString();
            if (!acc[categoryId]) {
                acc[categoryId] = { category: course.category.title, count: 0 };
            }
            acc[categoryId].count += ((_a = enrollmentByCourse.find(e => e._id.equals(course._id))) === null || _a === void 0 ? void 0 : _a.count) || 0;
            return acc;
        }, {});
        console.log("🚀 ~ enrollmentsByCategory ~ enrollmentsByCategory:", enrollmentsByCategory);
        const totalEnrollments = Object.values(enrollmentsByCategory).reduce((sum, category) => sum + category.count, 0);
        const categoryDistribution = Object.values(enrollmentsByCategory).map(category => ({
            category: category.category,
            percentage: totalEnrollments > 0 ? (category.count / totalEnrollments) * 100 : 0
        }));
        return categoryDistribution;
    }
    catch (error) {
        throw new Error(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.categoryEnrollmentDistribution = categoryEnrollmentDistribution;
