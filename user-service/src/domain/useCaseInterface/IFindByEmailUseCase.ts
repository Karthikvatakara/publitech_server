import { UserEntity } from "../entities/userEntity";

export interface IFindUserByEmail {
    execute:(email:string) => Promise<UserEntity | null>
}