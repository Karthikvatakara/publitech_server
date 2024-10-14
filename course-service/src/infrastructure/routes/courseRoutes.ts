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
         courseStatusChangeByInstructor, usersForInstructorChat, SubmitlessonProgress, 
         getLessonProgress, getEnrollmentByCourseId, getAllCoursesOfExamCreation, createExam, 
         examsOfInstructor, isExamExist, isExamExistByExamId, updateExam, createExamResult, 
         fetchExamResult, getExamResultByExamId, certificateGenerator, getResultsByUserId, 
         categoryEnrollmentDistribution, topEnrollments , totalCoursesOfInstructor ,noOfStudentsPurchased, 
        instructorCourses, instructorEnrollments, studentEnrolledCourses, noOfStudentsEnrolledCourses, 
        noOfCompletedEnrollments, onGoingCourses} = controllers(dependencies);

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

    router.route("/lesson-progress")
        .post(SubmitlessonProgress)
    
    router.route("/lesson-progress/:userId/:courseId/:lessonId")
        .get(getLessonProgress)
    
    router.route("/enrollment/:courseId/:userId")
        .get(getEnrollmentByCourseId)

    router.route("/getAllInstructorCourse")
        .get(jwtMiddleware,verifyInstructor,getAllCoursesOfExamCreation)    

    router.route("/createExam")
        .post(createExam)
        

    // fetching exams of particular instructor
    router.route("/getexams/")
        .get(jwtMiddleware,verifyInstructor,examsOfInstructor)

     

    // checking that exam is exist for a particular course
    router.route("/exams/:courseId")
        .get(jwtMiddleware,isExamExist)

    router.route("/examsbyexamid/:examId")
        .get(jwtMiddleware,isExamExistByExamId)

    router.route("/exams/update/:examId")
        .put(jwtMiddleware,verifyInstructor,updateExam)

    router.route("/exam/submit")
        .post(jwtMiddleware,createExamResult)
        
    
    router.route("/examresult/:resultId")
        .get(jwtMiddleware,fetchExamResult)

    router.route("/isResultExist/:assessmentRef/:userId")
        .get(getExamResultByExamId)

    router.route("/generate-certificate/:assessmentRef")
        .post(jwtMiddleware,certificateGenerator)

    router.route("/results")
        .get(jwtMiddleware,getResultsByUserId)


    router.route("/admin/categoryEnrollments")
        .get(jwtMiddleware,verifyAdmin,categoryEnrollmentDistribution)

    
    router.route("/admin/topEnrollments")
        .get(jwtMiddleware,verifyAdmin,topEnrollments)

    router.route("/instructor/totalCourses")
        .get(jwtMiddleware,verifyInstructor,totalCoursesOfInstructor)

    router.route("/instructor/noOfStudentsPurchased")
        .get(jwtMiddleware,verifyInstructor,noOfStudentsPurchased);
    
    router.route("/instructor/instructorCourses")
        .get(jwtMiddleware,verifyInstructor,instructorCourses)

    router.route("/instructor/instructorEnrollments")
        .get(jwtMiddleware,verifyInstructor,instructorEnrollments)
        
        router.route("/student/enrolledCourses")
        .get(jwtMiddleware,studentEnrolledCourses)

        router.route("/student/noOfEnrolledCourses")
        .get(jwtMiddleware,noOfStudentsEnrolledCourses)

        router.route("/student/noOfCompletedEnrollments")
        .get(jwtMiddleware,noOfCompletedEnrollments)

        router.route("/student/onGoingCourses")
        .get(jwtMiddleware,onGoingCourses)
        
        return router;
    }

