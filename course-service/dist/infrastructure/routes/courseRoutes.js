"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseRoutes = void 0;
const express_1 = require("express");
const index_1 = require("../../presentation/controllers/index");
const jwtMiddleware_1 = require("../../_lib/common/middlewares/jwtMiddleware");
const verifyAdmin_1 = require("../../_lib/common/middlewares/verifyAdmin");
const verifyInstructor_1 = require("../../_lib/common/middlewares/verifyInstructor");
const courseRoutes = (dependencies) => {
    const { createCategory, getAllCategory, updateCategory, blockCategory, getAllAvailabeCategory, createCourse, getAllCourse, getSingleCourse, updateCourse, getCompleteCourses, updateStatus, getCoursesToUser, createEnrollment, isEnrollmentExist, getEnrollmentByUserId, getAllCourseOfInstructor, courseStatusChangeByInstructor, usersForInstructorChat, SubmitlessonProgress, getLessonProgress, getEnrollmentByCourseId, getAllCoursesOfExamCreation, createExam, examsOfInstructor, isExamExist, isExamExistByExamId, updateExam, createExamResult, fetchExamResult, getExamResultByExamId, certificateGenerator, getResultsByUserId } = (0, index_1.controllers)(dependencies);
    const router = (0, express_1.Router)();
    router.route("/admin/category")
        .post(jwtMiddleware_1.jwtMiddleware, verifyAdmin_1.verifyAdmin, createCategory)
        .get(jwtMiddleware_1.jwtMiddleware, getAllCategory);
    router.route("/admin/category/:id")
        .put(jwtMiddleware_1.jwtMiddleware, verifyAdmin_1.verifyAdmin, updateCategory);
    router.route("/category/available")
        .get(jwtMiddleware_1.jwtMiddleware, verifyInstructor_1.verifyInstructor, getAllAvailabeCategory);
    router.route("/admin/category/status")
        .post(jwtMiddleware_1.jwtMiddleware, verifyAdmin_1.verifyAdmin, blockCategory);
    router.route("/createcourse")
        .get(jwtMiddleware_1.jwtMiddleware, verifyInstructor_1.verifyInstructor, getAllCourse)
        .post(jwtMiddleware_1.jwtMiddleware, verifyInstructor_1.verifyInstructor, createCourse);
    router.route('/course/:id')
        .get(getSingleCourse);
    router.route('/getInstructorCourse')
        .get(jwtMiddleware_1.jwtMiddleware, verifyInstructor_1.verifyInstructor, getAllCourseOfInstructor);
    router.route("/course/update/:courseId")
        .put(updateCourse);
    router.route("/allcourses")
        .get(jwtMiddleware_1.jwtMiddleware, verifyAdmin_1.verifyAdmin, getCompleteCourses);
    router.route("/update-course/:courseId")
        .put(updateStatus);
    router.route("/courseListToStudent")
        .get(jwtMiddleware_1.jwtMiddleware, getCoursesToUser);
    // creating enrollment
    router.route("/createEnrollment")
        .post(jwtMiddleware_1.jwtMiddleware, createEnrollment);
    router.route("/isEnrollmentExist")
        .post(isEnrollmentExist);
    router.route("/enrollment/mycourses")
        .get(jwtMiddleware_1.jwtMiddleware, getEnrollmentByUserId);
    router.route("/CourseStatusByinstructor/:id")
        .put(courseStatusChangeByInstructor);
    // fetching users for chat
    router.route("/usersforChat")
        .get(jwtMiddleware_1.jwtMiddleware, usersForInstructorChat);
    router.route("/lesson-progress")
        .post(SubmitlessonProgress);
    router.route("/lesson-progress/:userId/:courseId/:lessonId")
        .get(getLessonProgress);
    router.route("/enrollment/:courseId/:userId")
        .get(getEnrollmentByCourseId);
    router.route("/getAllInstructorCourse")
        .get(jwtMiddleware_1.jwtMiddleware, verifyInstructor_1.verifyInstructor, getAllCoursesOfExamCreation);
    router.route("/createExam")
        .post(createExam);
    // fetching exams of particular instructor
    router.route("/getexams/")
        .get(jwtMiddleware_1.jwtMiddleware, verifyInstructor_1.verifyInstructor, examsOfInstructor);
    // checking that exam is exist for a particular course
    router.route("/exams/:courseId")
        .get(jwtMiddleware_1.jwtMiddleware, isExamExist);
    router.route("/examsbyexamid/:examId")
        .get(jwtMiddleware_1.jwtMiddleware, isExamExistByExamId);
    router.route("/exams/update/:examId")
        .put(jwtMiddleware_1.jwtMiddleware, verifyInstructor_1.verifyInstructor, updateExam);
    router.route("/exam/submit")
        .post(jwtMiddleware_1.jwtMiddleware, createExamResult);
    router.route("/examresult/:resultId")
        .get(jwtMiddleware_1.jwtMiddleware, fetchExamResult);
    router.route("/isResultExist/:assessmentRef")
        .get(getExamResultByExamId);
    router.route("/generate-certificate/:assessmentRef")
        .post(jwtMiddleware_1.jwtMiddleware, certificateGenerator);
    router.route("/results")
        .get(jwtMiddleware_1.jwtMiddleware, getResultsByUserId);
    return router;
};
exports.courseRoutes = courseRoutes;
