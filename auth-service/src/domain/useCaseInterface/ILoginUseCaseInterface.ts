import { UserEntity } from "../entities/userEntity";
import { loginEntity } from "../entities/loginEntity";

export interface ILogininterfaceUseCase {
    execute(data:loginEntity): Promise<UserEntity | null>;
}