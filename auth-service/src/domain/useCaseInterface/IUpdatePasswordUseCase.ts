import { UserEntity } from "../entities/userEntity"

export interface IUpdatePasswordUseCase {
    execute(email:string,password:string):Promise<UserEntity | null>
}