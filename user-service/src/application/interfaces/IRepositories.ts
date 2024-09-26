import { UserEntity } from "../../domain/entities/userEntity";

export interface IRespositories {
    findAppliedInstructor:(page: number,limit: number,status: string,search: string) => Promise<{ instructors: UserEntity[],totalCount: number, totalPages: number,currentPage: number}>;
    approveInstructor:(instructorId:string,reason:string) => Promise< UserEntity | null >;
    getallInstructors:( page: number, limit: number, status: string, search: string )=> Promise<{ instructors: UserEntity[], totalPages: number, totalCount: number}>;
    blockInstructor:(id:string,action:"block" | "unblock") => Promise< UserEntity | null>;
    editUserProfile:(data:UserEntity) => Promise< UserEntity | null >;
    findByEmail:(email:string) => Promise<UserEntity | null>
    getAllStudents:( page: number, limit: number, status: string, search: string) => Promise<{ students: UserEntity[], totalPages: number, totalCount: number}>
    toggleStudentBlockStatus:(userId: string) => Promise<UserEntity | null>
}