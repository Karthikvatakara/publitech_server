import { UserEntity } from "../entities/userEntity";

export interface IFindByEmailUseCase {
    execute(email:string): Promise<UserEntity | null | boolean>
}