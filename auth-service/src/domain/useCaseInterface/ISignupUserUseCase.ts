import { UserEntity } from "../entities/userEntity";

export interface ISignupUserUseCase {
    execute(data:UserEntity):Promise<UserEntity | null>;
}