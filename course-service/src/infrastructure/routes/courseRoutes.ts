import { Router } from "express";
import { IDependencies } from "../../application/interfaces/IDependency";
import { controllers } from "../../presentation/controllers/index";
import { jwtMiddleware } from "../../_lib/common/middlewares/jwtMiddleware";
import { verifyAdmin } from "../../_lib/common/middlewares/verifyAdmin";
import { verifyInstructor } from "../../_lib/common/middlewares/verifyInstructor";

export const courseRoutes = (dependencies:IDependencies) => {
    const { createCategory,getAllCategory,updateCategory,blockCategory,getAllAvailabeCategory,
        createCourse,getAllCourse,getSingleCourse,updateCourse,getCompleteCourses,updateStatus,
        getCoursesToUser,createEnrollment,isEnrollmentExist,getEnrollmentByUserId,getAllCourseOfInstructor,
         courseStatusChangeByInstructor, usersForInstructorChat} = controllers(dependencies);

    const router = Router();

    router.route("/admin/category")
        .post(jwtMiddleware,verifyAdmin,createCategory)
        .get(jwtMiddleware,getAllCategory)

    router.route("/admin/category/:id")
        .put(jwtMiddleware,verifyAdmin,updateCategory)
    
    router.route("/category/available")
        .get(jwtMiddleware,verifyInstructor,getAllAvailabeCategory)
        
    router.route("/admin/category/status")
        .post(jwtMiddleware,verifyAdmin,blockCategory)

    router.route("/createcourse")
        .get(jwtMiddleware,verifyInstructor,getAllCourse)
        .post(jwtMiddleware,verifyInstructor,createCourse)

    router.route('/course/:id')
        .get(getSingleCourse)
    
    router.route('/getInstructorCourse')
        .get(jwtMiddleware,verifyInstructor,getAllCourseOfInstructor)

    router.route("/course/update/:courseId")
        .put(updateCourse)

    router.route("/allcourses")
        .get(jwtMiddleware,verifyAdmin,getCompleteCourses)

    router.route("/update-course/:courseId")
        .put(updateStatus)
    
    router.route("/courseListToStudent")
        .get(jwtMiddleware,getCoursesToUser)

    // creating enrollment
    router.route("/createEnrollment")
        .post(jwtMiddleware,createEnrollment)
    
    router.route("/isEnrollmentExist")
        .post(isEnrollmentExist)
        
    router.route("/enrollment/mycourses")
        .get(jwtMiddleware,getEnrollmentByUserId)

    router.route("/CourseStatusByinstructor/:id")
        .put(courseStatusChangeByInstructor)
    
    // fetching users for chat
    router.route("/usersforChat")
        .get(jwtMiddleware,usersForInstructorChat)


        return router;
}

