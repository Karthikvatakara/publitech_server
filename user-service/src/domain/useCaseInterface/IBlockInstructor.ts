import { UserEntity } from "../entities/userEntity"

export interface IBlockInstructorUseCase {
    execute(id:string,action:"block" | "unblock"):Promise<UserEntity | null>
}