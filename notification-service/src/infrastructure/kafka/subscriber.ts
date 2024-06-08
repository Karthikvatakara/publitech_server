import userCreatedConsumer from "./consumers/userCreatedConsumer";

export interface INotificationSubscriber {
    userCreated(data:any):any;
}

    export const createSubscriber = (): INotificationSubscriber => {
        return {
                userCreated: userCreatedConsumer
        }
    }
