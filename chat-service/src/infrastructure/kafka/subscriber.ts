import { chatEntity, UserEntity } from "../../domain/entities"
import userCreatedConsumer from "./consumers/userCreatedConsumer"
import coursePurchasedConsumer  from "./consumers/coursePurchasedConsumer"
import { createChatEntity } from "../database/mongoDb/repositories/coursePurchasedChatCreation"
import updateChatSubscriptionConsumer from "./consumers/updateChatSubscriptionConsumer"

export interface INotificationSubscriber {
    userCreated(data:UserEntity):Promise<void>,
    createChat(data: createChatEntity) : Promise<void>
    updateChatSubscription(data: chatEntity) : Promise<void>
}

export const createSubscriber = () :INotificationSubscriber => {
    return {
        userCreated: userCreatedConsumer,
        createChat : coursePurchasedConsumer,
        updateChatSubscription: updateChatSubscriptionConsumer
    }
}