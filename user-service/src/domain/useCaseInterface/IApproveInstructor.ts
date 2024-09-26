import { UserEntity } from "../entities/userEntity";

export interface IApproveInstructorUseCase {
    execute(instructorId:string,reason:string):Promise<UserEntity| null>
}