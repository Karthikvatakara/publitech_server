import { Router } from 'express';
import { IDependencies } from '../../application/interfaces/IDepencencies';
import { controllers } from "../../presentation/controllers/index";
import { jwtMiddleware } from '../../_lib/common/middlewares/jwtMiddleware';
import { verifyAdmin } from '../../_lib/common/middlewares/verifyAdmin';


export const authRoutes = (dependencies:IDependencies) => {
    const {signup,getUser,login,logout,applyToTeach,forgotPassword,updatePassword,googleAuth, 
        instructorCount, studentsCount, findInstructorById } = controllers(dependencies);

    const router = Router();

    router.route("/signup").post(signup);
    router.route("/").get(jwtMiddleware,getUser)
    router.route("/login").post(login)
    router.route("/logout").delete(logout)
    router.route("/apply-to-teach").post(applyToTeach)
    router.route("/forgot-password").post(forgotPassword)
    router.route("/update-password").post(updatePassword)
    router.route("/google").post(googleAuth)
    router.route("/admin/instructorCount").get(jwtMiddleware,verifyAdmin,instructorCount);
    router.route("/admin/studentCount").get(studentsCount)
    router.route("/student/instructor").post(findInstructorById)

    return router;
}
