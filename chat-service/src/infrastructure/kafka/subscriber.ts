import { UserEntity } from "../../domain/entities"
import userCreatedConsumer from "./consumers/userCreatedConsumer"
import coursePurchasedConsumer, { createCourseEntity } from "./consumers/coursePurchasedConsumer"

export interface INotificationSubscriber {
    userCreated(data:UserEntity):Promise<void>,
    createChat(data: createCourseEntity) : Promise<void>

}

export const createSubscriber = () :INotificationSubscriber => {
    return {
        userCreated: userCreatedConsumer,
        createChat : coursePurchasedConsumer
    }
}