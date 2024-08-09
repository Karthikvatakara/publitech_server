import { UserEntity } from "../entities";

export interface IFindUserByEmail {
    execute:(email:string) => Promise<UserEntity | null>
}