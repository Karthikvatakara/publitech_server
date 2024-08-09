"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = void 0;
const createCategoryController_1 = require("./createCategoryController");
const getAllCategoriesController_1 = require("./getAllCategoriesController");
const updateCategoryController_1 = require("./updateCategoryController");
const blockCategoryController_1 = require("./blockCategoryController");
const getAllAvailableCategoryController_1 = require("./getAllAvailableCategoryController");
const createCourseController_1 = require("./createCourseController");
const getAllCourseController_1 = require("./getAllCourseController");
const getCourseController_1 = require("./getCourseController");
const updateCourseController_1 = require("./updateCourseController");
const getCompleteCoursesController_1 = require("./getCompleteCoursesController");
const updateCourseStatusController_1 = require("./updateCourseStatusController");
const getCoursesToUserController_1 = require("./getCoursesToUserController");
const createEnrollmentController_1 = require("./createEnrollmentController");
const isEnrollmentExistControllet_1 = require("./isEnrollmentExistControllet");
const getEnrollmentByUserIdController_1 = require("./getEnrollmentByUserIdController");
const getAllCourseOfInstructorController_1 = require("./getAllCourseOfInstructorController");
const courseStatusChangeByInstructorController_1 = require("./courseStatusChangeByInstructorController");
const usersForInstructorChatController_1 = require("./usersForInstructorChatController");
const controllers = (dependencies) => {
    return {
        createCategory: (0, createCategoryController_1.createCategoryController)(dependencies),
        getAllCategory: (0, getAllCategoriesController_1.getAllCategoryController)(dependencies),
        updateCategory: (0, updateCategoryController_1.updateCategoryController)(dependencies),
        blockCategory: (0, blockCategoryController_1.blockCategoryController)(dependencies),
        getAllAvailabeCategory: (0, getAllAvailableCategoryController_1.getAllAvailableCategoryController)(dependencies),
        createCourse: (0, createCourseController_1.createCourseController)(dependencies),
        getAllCourse: (0, getAllCourseController_1.getAllCourseController)(dependencies),
        getSingleCourse: (0, getCourseController_1.getCourseController)(dependencies),
        updateCourse: (0, updateCourseController_1.updateCourseController)(dependencies),
        getCompleteCourses: (0, getCompleteCoursesController_1.getCompleteCoursesController)(dependencies),
        updateStatus: (0, updateCourseStatusController_1.updateCourseStatusController)(dependencies),
        getCoursesToUser: (0, getCoursesToUserController_1.getCoursesToUserController)(dependencies),
        createEnrollment: (0, createEnrollmentController_1.createEnrollmentController)(dependencies),
        isEnrollmentExist: (0, isEnrollmentExistControllet_1.isEnrollmenetExistController)(dependencies),
        getEnrollmentByUserId: (0, getEnrollmentByUserIdController_1.getEnrollmentByUserIdController)(dependencies),
        getAllCourseOfInstructor: (0, getAllCourseOfInstructorController_1.getAllCourseOfInstructorController)(dependencies),
        courseStatusChangeByInstructor: (0, courseStatusChangeByInstructorController_1.courseStatusChangeByInstructorController)(dependencies),
        usersForInstructorChat: (0, usersForInstructorChatController_1.usersForInstructorChatController)(dependencies),
    };
};
exports.controllers = controllers;
