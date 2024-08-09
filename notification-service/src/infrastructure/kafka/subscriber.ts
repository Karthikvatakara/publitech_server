import userCreatedConsumer from "./consumers/userCreatedConsumer";
import forgotPasswordConsumer from "./consumers/forgotPasswordConsumer";
import instructorApprovalConsumer from "./consumers/instructorApprovalConsumer";

export interface INotificationSubscriber {
    userCreated(data:any):any;
    requestForgotPassword(data:any):any
    instructorApproval(data:any):any
}

    export const createSubscriber = (): INotificationSubscriber => {
        return {
                userCreated: userCreatedConsumer,
                requestForgotPassword:forgotPasswordConsumer,
                instructorApproval:instructorApprovalConsumer
        }
    }
