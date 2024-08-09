import { UserEntity } from "../entities/userEntity";

export interface IEditUserProfile {
    execute:(data:UserEntity) => Promise<UserEntity | null>
}