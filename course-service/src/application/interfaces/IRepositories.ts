import { CategoryEntity, UserEntity,CourseEntity,EnrollmentEntity, LessonProgress } from "../../domain/entities";
import { assessmentEntity } from "../../domain/entities/assessmentEntity";
import { resultEntity } from "../../domain/entities/resultEntity";
import { EnrollmentWithCompletionEntity } from "../../domain/entities/EnrollmentWithCompletionEntity";
import { CategoryDistributionEntity } from "../../domain/entities/CategoryDistributionEntity";

export interface IRespositories {
    findByEmail:(email:string) => Promise<UserEntity | null>,
    findUserById:(id:string) => Promise<UserEntity | null>
    createCategory:(data:CategoryEntity) => Promise<CategoryEntity | null>
    getAllCategory:() => Promise<CategoryEntity[] | null>
    updateCategory:(id:string,data:CategoryEntity)=> Promise<CategoryEntity | null>
    blockCategory:(id:string,action:"block" | "unblock") => Promise<CategoryEntity | null>
    getAllAvailableCategory:() => Promise<CategoryEntity[] | null>
    createCourse:(data:CourseEntity) => Promise<CourseEntity | null>
    getAllCourse:(id:string) => Promise<CourseEntity[] | null>
    getCourse:(id:string) =>  Promise<CourseEntity | null>
    updateCourse:(courseId:string,data:CourseEntity) => Promise<CourseEntity | null>
    getCompleteCourses:( page: number, limit: number, search: string, filter: string, sort: string) => Promise<{ courses: CourseEntity[], total: number}>
    updateCourseStatus:(courseId:string,data:CourseEntity) => Promise<CourseEntity | null>
    getCoursesToUser:( params: { search?: string, category?: string, sort?: string, page: number,limit: number}) => Promise<{ courses:CourseEntity[],totalPages:number,currentPage:number} | null>
    createEnrollment:(data:EnrollmentEntity) => Promise<EnrollmentEntity | null>
    isEnrollmentExist:(courseId:string,userId:string) => Promise<EnrollmentEntity | null>
    getEnrollmentByUserId:(userId: string) => Promise<EnrollmentEntity[] | null>
    getAllCourseOfInstructor:( id: string, page: number, limit: number, search: string, stage: string) =>  Promise <{ courses: CourseEntity[], totalPages: number, currentPage: number} | null>
    courseStatusChangeByInstructor:( id: string, status: "block" | "unblock") =>  Promise<CourseEntity | null>
    usersForInstructorChat: ( instructorId: string ) => Promise< UserEntity[] | null>
    lessonProgress:(userId: string, courseId: string, lessonId: string, timeWatched: number, totalDuration: number) => Promise<void>
    getLessonProgress:(userId: string, lessonId: string, courseId: string) => Promise<LessonProgress | null> 
    getEnrollmentByCourseId: ( courseId: string, userId: string ) => Promise<EnrollmentEntity | null>
    getAllCoursesExamCreation: (instructorRef: string) => Promise<CourseEntity[] | null>
    createExam: ( data: assessmentEntity ) => Promise< assessmentEntity | null>
    examsOfInstructor : ( instructorId: string) => Promise<assessmentEntity[] | null>
    isExamExist: ( courseId: string ) => Promise<assessmentEntity | null>
    isExamExistByExamId: ( examId: string ) => Promise<assessmentEntity | null>
    updateExam:( examId: string, data: assessmentEntity ) => Promise<assessmentEntity | null>
    createExamResult :( data: resultEntity ) => Promise<resultEntity | null>
    fetchExamResultById:(resultId: string) => Promise<resultEntity | null>
    getExamResultByExamId:( assessmentRef: string ) =>  Promise<resultEntity |null>
    getResultsByUserId:( userId: string ) => Promise<resultEntity[] | null>
    checkResultOfAssessmentAndUserId: ( assessmentRef: string, userRef: string ) => Promise<resultEntity | null>
    updateResult: ( resultId: string, data: resultEntity) => Promise<resultEntity | null>
    categoryEnrollmentDistribution:() => Promise<CategoryDistributionEntity[] | null> 
    topEnrollments:() => Promise<CourseEntity[] | null>
    totalCoursesOfInstructor:(userId: string) => Promise<number | null>
    noOfStudentsPurchased:(instructorId: string ) => Promise<number | null>
    instructorCourses: ( instructorId: string ) => Promise<CourseEntity[] | null>
    instructorEnrollments:(instructorId: string) => Promise<EnrollmentEntity[] | any>
    studentEnrolledCourses:( userId: string ) => Promise<EnrollmentWithCompletionEntity[] | null>
    noOfStudentEnrolledCourses:( userId: string ) => Promise<number | null>
    noOfCompletedEnrollments: ( userId: string ) => Promise<number | null>
}
