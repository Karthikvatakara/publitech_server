import { UserEntity } from "../entities";

export interface ISaveFcmTokenUseCase {
    execute: ( token: string, userId: string )=> Promise<UserEntity | null>
}