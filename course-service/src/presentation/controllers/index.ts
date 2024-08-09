import { IDependencies } from "../../application/interfaces/IDependency";
import { createCategoryController } from "./createCategoryController";
import { getAllCategoryController } from "./getAllCategoriesController";
import { updateCategoryController } from "./updateCategoryController";
import { blockCategoryController } from "./blockCategoryController";
import { getAllAvailableCategoryController } from "./getAllAvailableCategoryController";
import { createCourseController } from "./createCourseController";
import { getAllCourseController } from "./getAllCourseController";
import { getCourseController } from "./getCourseController";
import { updateCourseController } from "./updateCourseController";
import { getCompleteCoursesController } from "./getCompleteCoursesController";
import { updateCourseStatusController } from "./updateCourseStatusController";
import { getCoursesToUserController } from "./getCoursesToUserController";
import { createEnrollmentController } from "./createEnrollmentController";
import { isEnrollmenetExistController } from "./isEnrollmentExistControllet";
import { getEnrollmentByUserIdController } from "./getEnrollmentByUserIdController";
import { getAllCourseOfInstructorController } from "./getAllCourseOfInstructorController";
import { courseStatusChangeByInstructorController } from "./courseStatusChangeByInstructorController";
import { usersForInstructorChatController } from "./usersForInstructorChatController";

export const controllers = (dependencies:IDependencies) => {
    return {
        createCategory: createCategoryController(dependencies),
        getAllCategory: getAllCategoryController(dependencies),
        updateCategory: updateCategoryController(dependencies),
        blockCategory: blockCategoryController(dependencies),
        getAllAvailabeCategory: getAllAvailableCategoryController(dependencies),
        createCourse: createCourseController(dependencies),
        getAllCourse: getAllCourseController(dependencies),
        getSingleCourse: getCourseController(dependencies),
        updateCourse: updateCourseController(dependencies),
        getCompleteCourses: getCompleteCoursesController(dependencies),
        updateStatus: updateCourseStatusController(dependencies),
        getCoursesToUser: getCoursesToUserController(dependencies),
        createEnrollment: createEnrollmentController(dependencies),
        isEnrollmentExist: isEnrollmenetExistController(dependencies),
        getEnrollmentByUserId: getEnrollmentByUserIdController(dependencies),
        getAllCourseOfInstructor: getAllCourseOfInstructorController(dependencies),
        courseStatusChangeByInstructor: courseStatusChangeByInstructorController(dependencies),
        usersForInstructorChat : usersForInstructorChatController(dependencies),
    }
}