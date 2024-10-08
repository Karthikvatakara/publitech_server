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
const lessonProgressController_1 = require("./lessonProgressController");
const getLessonProgressController_1 = require("./getLessonProgressController");
const getEnrollmentByCourseId_1 = require("./getEnrollmentByCourseId");
const getAllCoursesExamCreationController_1 = require("./getAllCoursesExamCreationController");
const createExamController_1 = require("./createExamController");
const examsOfInstructorController_1 = require("./examsOfInstructorController");
const isExamExistController_1 = require("./isExamExistController");
const isExamExistByExamIdController_1 = require("./isExamExistByExamIdController");
const updateExamController_1 = require("./updateExamController");
const createExamResultController_1 = require("./createExamResultController");
const fetchExamResultByIdController_1 = require("./fetchExamResultByIdController");
const getExamResultByExamIdController_1 = require("./getExamResultByExamIdController");
const certificateGenerator_1 = require("./certificateGenerator");
const getResultsByUserIdController_1 = require("./getResultsByUserIdController");
const categoryEnrollmentDistributionController_1 = require("./categoryEnrollmentDistributionController");
const topEnrollmentsController_1 = require("./topEnrollmentsController");
const totalCoursesOfInstructorController_1 = require("./totalCoursesOfInstructorController");
const noOfStudentsPurchasedController_1 = require("./noOfStudentsPurchasedController");
const instructorCoursesController_1 = require("./instructorCoursesController");
const instructorEnrollmentController_1 = require("./instructorEnrollmentController");
const studentEnrolledCourseController_1 = require("./studentEnrolledCourseController");
const noOfStudentEnrolledCoursesController_1 = require("./noOfStudentEnrolledCoursesController");
const noOfCompletedEnrollmentsController_1 = require("./noOfCompletedEnrollmentsController");
const onGoingCoursesController_1 = require("./onGoingCoursesController");
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
        SubmitlessonProgress: (0, lessonProgressController_1.lessonProgressController)(dependencies),
        getLessonProgress: (0, getLessonProgressController_1.getLessonProgressController)(dependencies),
        getEnrollmentByCourseId: (0, getEnrollmentByCourseId_1.getEnrollmentByCourseIdController)(dependencies),
        getAllCoursesOfExamCreation: (0, getAllCoursesExamCreationController_1.getAllCoursesExamCreationController)(dependencies),
        createExam: (0, createExamController_1.createExamController)(dependencies),
        examsOfInstructor: (0, examsOfInstructorController_1.examsOfInstructorController)(dependencies),
        isExamExist: (0, isExamExistController_1.isExamExistController)(dependencies),
        isExamExistByExamId: (0, isExamExistByExamIdController_1.isExamExistByExamIdcontroller)(dependencies),
        updateExam: (0, updateExamController_1.updateExamController)(dependencies),
        createExamResult: (0, createExamResultController_1.createExamResultController)(dependencies),
        fetchExamResult: (0, fetchExamResultByIdController_1.fetchExamResultByIdController)(dependencies),
        getExamResultByExamId: (0, getExamResultByExamIdController_1.getExamResultByExamIdController)(dependencies),
        certificateGenerator: (0, certificateGenerator_1.certificateGeneratorController)(dependencies),
        getResultsByUserId: (0, getResultsByUserIdController_1.getResultsByUserIdController)(dependencies),
        categoryEnrollmentDistribution: (0, categoryEnrollmentDistributionController_1.categoryEnrollmentDistributionController)(dependencies),
        topEnrollments: (0, topEnrollmentsController_1.topEnrollmentsController)(dependencies),
        totalCoursesOfInstructor: (0, totalCoursesOfInstructorController_1.totalCoursesOfInstructorController)(dependencies),
        noOfStudentsPurchased: (0, noOfStudentsPurchasedController_1.noOfStudentsPurchasedController)(dependencies),
        instructorCourses: (0, instructorCoursesController_1.instructorCoursesController)(dependencies),
        instructorEnrollments: (0, instructorEnrollmentController_1.instructorEnrollmentController)(dependencies),
        studentEnrolledCourses: (0, studentEnrolledCourseController_1.studentEnrolledCoursesController)(dependencies),
        noOfStudentsEnrolledCourses: (0, noOfStudentEnrolledCoursesController_1.noOfStudentEnrolledCoursesController)(dependencies),
        noOfCompletedEnrollments: (0, noOfCompletedEnrollmentsController_1.noOfCompletedEnrollmentsController)(dependencies),
        onGoingCourses: (0, onGoingCoursesController_1.onGoingCoursesController)(dependencies)
    };
};
exports.controllers = controllers;
