import { UserEntity } from "../../domain/entities/userEntity";
import userCreatedConsumer from "./consumer/userCreatedConsumer";
import editUserProfileConsumer from "./consumer/editUserProfileConsumer";

export interface INotificationSubscriber {
    userCreated(data:UserEntity):Promise<void>
    editUserProfile(data: UserEntity) : Promise<void>
}

export const createSubscriber = ():INotificationSubscriber => {
    return {
        userCreated:userCreatedConsumer,
        editUserProfile: editUserProfileConsumer
    }
}


