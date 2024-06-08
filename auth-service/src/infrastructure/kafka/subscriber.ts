import sendVerificationMailConsumer from "./consumers/sendVerificationMailConsumer";

export interface INotificationSubscriber {
    sendVerificationMail(email:string,otp:string):any;
}

export const createSubscriber = ():INotificationSubscriber => {
    return {
        sendVerificationMail:sendVerificationMailConsumer
    }
}