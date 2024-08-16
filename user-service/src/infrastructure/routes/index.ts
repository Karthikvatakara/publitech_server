import { Router } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import { controllers } from "../../presentation/controllers/index";
import { jwtMiddleware } from "../../_lib/common/middlewares/jwtMiddleware";
import { verifyAdmin } from "../../_lib/common/middlewares/verifyAdmin";
import { verifyInstructor } from "../../_lib/common/middlewares/verifyInstructor";

export const routes = (dependencies: IDependencies) => {
  const {
    findAppliedInstructor,
    approveInstructor,
    getallInstructors,
    blockInstructor,
    editUserProfile,
    getAllStudents,
    toggleStudentBlockStatus
  } = controllers(dependencies);

  const router = Router();

  router
    .route("/admin/instructor/applications")
    .get(jwtMiddleware, verifyAdmin, findAppliedInstructor);

  router
    .route("/admin/instructor/approval")
    .post(jwtMiddleware, verifyAdmin, approveInstructor);

  router
    .route("/admin/instructor")
    .get(jwtMiddleware, verifyAdmin, getallInstructors);

  router
    .route("/admin/students")
    .get(jwtMiddleware,verifyAdmin,getAllStudents)

  router
    .route("/admin/students/status/:userId")
    .post(toggleStudentBlockStatus)

  router
    .route("/admin/instructor/status")
    .post(jwtMiddleware, verifyAdmin, blockInstructor);

  router
    .route("/user/editUserProfile")
    .post(jwtMiddleware, verifyInstructor, editUserProfile);

  return router;
};
