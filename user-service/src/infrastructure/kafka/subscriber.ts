import { UserEntity } from "../../domain/entities/userEntity";
import userCreatedConsumer from "./consumers/userCreatedConsumer";
import applyToTeachConsumer from "./consumers/applyToTeachConsumer";
import { applyToTeachEntity } from "../../domain/entities/applyToTeachEntity";

export interface INotificationSubscriber {
    userCreated(data:UserEntity):Promise<void>,
    instructorApplied(data:applyToTeachEntity):Promise<void>
}

export const createSubscriber = ():INotificationSubscriber => {
    return {
        userCreated:userCreatedConsumer,
        instructorApplied:applyToTeachConsumer
    }
}