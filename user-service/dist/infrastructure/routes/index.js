"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const index_1 = require("../../presentation/controllers/index");
const jwtMiddleware_1 = require("../../_lib/common/middlewares/jwtMiddleware");
const verifyAdmin_1 = require("../../_lib/common/middlewares/verifyAdmin");
const verifyInstructor_1 = require("../../_lib/common/middlewares/verifyInstructor");
const routes = (dependencies) => {
    const { findAppliedInstructor, approveInstructor, getallInstructors, blockInstructor, editUserProfile, getAllStudents, toggleStudentBlockStatus } = (0, index_1.controllers)(dependencies);
    const router = (0, express_1.Router)();
    router
        .route("/admin/instructor/applications")
        .get(jwtMiddleware_1.jwtMiddleware, verifyAdmin_1.verifyAdmin, findAppliedInstructor);
    router
        .route("/admin/instructor/approval")
        .post(jwtMiddleware_1.jwtMiddleware, verifyAdmin_1.verifyAdmin, approveInstructor);
    router
        .route("/admin/instructor")
        .get(jwtMiddleware_1.jwtMiddleware, verifyAdmin_1.verifyAdmin, getallInstructors);
    router
        .route("/admin/students")
        .get(getAllStudents);
    router
        .route("/admin/students/status/:userId")
        .post(toggleStudentBlockStatus);
    router
        .route("/admin/instructor/status")
        .post(jwtMiddleware_1.jwtMiddleware, verifyAdmin_1.verifyAdmin, blockInstructor);
    router
        .route("/user/editUserProfile")
        .post(jwtMiddleware_1.jwtMiddleware, verifyInstructor_1.verifyInstructor, editUserProfile);
    return router;
};
exports.routes = routes;
