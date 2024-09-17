import { UserEntity } from "../../domain/entities";

export interface IRespositories {
    saveFcmToken:( Token: string, userId: string ) => Promise<UserEntity | null>
}