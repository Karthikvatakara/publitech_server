import { UserEntity } from "../entities";

export interface IFindUserById {
    execute(id:string):Promise<UserEntity | null>
}