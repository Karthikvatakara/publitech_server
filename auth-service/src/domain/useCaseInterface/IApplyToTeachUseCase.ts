import { UserEntity } from "../entities/userEntity";
import { applyToTeachEntity } from "../entities/applyToTeachEntity";

export interface IApplyToTeachUseCase {
    execute(data:applyToTeachEntity):Promise< UserEntity | null>;
}