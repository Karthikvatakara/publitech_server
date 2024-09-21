import { loginEntity } from "../../domain/entities/loginEntity";
import { UserEntity } from "../../domain/entities/userEntity";
import { applyToTeachEntity } from "../../domain/entities/applyToTeachEntity";

export interface IRespositories {
    signup:(data:UserEntity) => Promise<UserEntity | null>;
    findByEmail:(email:string) => Promise<UserEntity | null>; 
    findUserById:(id:string) => Promise<UserEntity | null>;
    login:(data:loginEntity) => Promise<UserEntity | null>;
    applyToTeach:(data:applyToTeachEntity) => Promise<UserEntity | null>;
    updatePassword:(email:string,password:string) => Promise<UserEntity | null>;
    instructorCount:() => Promise<number | null>
    studentsCount:() => Promise<number | null>
    // editUserProfile:(data:UserEntity) => Promise< UserEntity | null>;
}   