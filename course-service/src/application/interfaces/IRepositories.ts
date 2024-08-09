import { CategoryEntity, UserEntity,CourseEntity,EnrollmentEntity } from "../../domain/entities";

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
}
