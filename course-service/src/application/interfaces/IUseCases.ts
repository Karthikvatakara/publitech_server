import { IFindUserByEmail,IFindUserById,ICreateCategoryUseCase,IGetAllCategoryUseCase,IUpdateCategoryUseCase,
    IBlockCategoryUseCase,IGetAllAvailableCategoryUseCase,ICreateCourseUseCase,IGetAllCourseUseCase,
IGetSingleCourseUseCase,IUpdateCourseUseCase,IGetCompleteCoursUseCase,IUpdateCourseStatusUseCase
,IGetCoursesToUser,ICreteEnrollmentUseCase,IIsEnrollmentExistUseCase,IGetEnrollmentByUserId,IGetAllCourseOfInstructorUseCase, 
ICourseStatusChangeByInstructorUseCase, IUsersForInstructorChatUseCase, 
ILessonProgressUseCase, IGetLessonProgressUseCase, IGetEnrollmentByCourseIdUseCase, 
IGetAllCoursesExamCreationUseCase, ICreateExamUseCase, IExamsOfInstructorUseCase,IIsExamExistUseCase, 
IIsExamExistByExamIdUseCase, IUpdateExamUseCase, ICreateExamResultUseCase, IFetchExamResultByIdUseCase} from "../../domain/useCaseInterface";
import { IDependencies } from "./IDependency";  

export interface IUseCases {
    findByEmailUseCase:(dependencies:IDependencies) => IFindUserByEmail
    findUserByIdUseCase:(dependencies:IDependencies) => IFindUserById
    createCategoryUseCase:(dependencies:IDependencies) => ICreateCategoryUseCase
    getAllCategoryUseCase:(dependencies:IDependencies) => IGetAllCategoryUseCase
    updateCategoryUseCase:(dependencies:IDependencies) => IUpdateCategoryUseCase
    blockCategoryUseCase:(dependencies:IDependencies) => IBlockCategoryUseCase
    getAllAvailableCategoryUseCase:(dependencies:IDependencies) => IGetAllAvailableCategoryUseCase
    createCourseUseCase:(dependencies:IDependencies) => ICreateCourseUseCase
    getCourseUseCase:(dependencies:IDependencies) => IGetAllCourseUseCase
    getSingleCourseUseCase:(dependencies:IDependencies) => IGetSingleCourseUseCase
    updateCourseUseCase:(dependencies:IDependencies) => IUpdateCourseUseCase
    getCompleteCourses:(dependencies:IDependencies) => IGetCompleteCoursUseCase
    updateCourseStatusUseCase:(dependencies:IDependencies) => IUpdateCourseStatusUseCase
    getCoursesToUserUseCase:(dependencies:IDependencies) => IGetCoursesToUser
    createEnrollmentUseCase:(dependencies:IDependencies) => ICreteEnrollmentUseCase
    isEnrollmentExistUseCase:(dependencies:IDependencies) => IIsEnrollmentExistUseCase
    getEnrollmentByUserId:(dependencies:IDependencies) => IGetEnrollmentByUserId
    getAllCourseOfInsructorUseCase:( dependencies: IDependencies) => IGetAllCourseOfInstructorUseCase
    courseStatusChangeByInstructorUseCase:( dependencies: IDependencies) => ICourseStatusChangeByInstructorUseCase
    usersForInstructorChatUseCase:( dependencies: IDependencies ) => IUsersForInstructorChatUseCase
    lessonProgressUseCase: (dependencies: IDependencies) => ILessonProgressUseCase
    getLessonProgressUseCase: (dependencies: IDependencies) => IGetLessonProgressUseCase
    getEnrollmentByCourseIdUseCase: ( dependencies: IDependencies ) => IGetEnrollmentByCourseIdUseCase
    getAllCoursesExamCreationUseCase: ( dependencies: IDependencies ) => IGetAllCoursesExamCreationUseCase
    createExamUseCase : ( dependencies: IDependencies ) => ICreateExamUseCase;
    examsOfInstructorUseCase: ( dependencies: IDependencies ) => IExamsOfInstructorUseCase
    isExamExistUseCase: ( dependencies: IDependencies ) => IIsExamExistUseCase
    isExamExistByExamIdUseCase: ( dependencies: IDependencies ) => IIsExamExistByExamIdUseCase
    updateExamUseCase: ( dependencies: IDependencies ) => IUpdateExamUseCase
    createExamResultUseCase: ( dependencies: IDependencies ) => ICreateExamResultUseCase
    fetchExamResultByIdUseCase: ( dependencies: IDependencies ) => IFetchExamResultByIdUseCase
}