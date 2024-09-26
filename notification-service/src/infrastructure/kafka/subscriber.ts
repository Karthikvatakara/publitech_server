import userCreatedConsumer from "./consumers/userCreatedConsumer";
import forgotPasswordConsumer from "./consumers/forgotPasswordConsumer";
import instructorApprovalConsumer from "./consumers/instructorApprovalConsumer";
import courseStatusChange from "./consumers/courseStatusChange";
import userCreationUserData from "./consumers/userCreationUserData";

export interface INotificationSubscriber {
    userCreated(data:any):any;
    requestForgotPassword(data:any):any
    instructorApproval(data:any):any
    courseStatusUpdated(data:any):any
    userCreatedEmailSent(data:string):any
}

    export const createSubscriber = (): INotificationSubscriber => {
        return {
                userCreated: userCreationUserData,
                requestForgotPassword: forgotPasswordConsumer,
                instructorApproval: instructorApprovalConsumer,
                courseStatusUpdated: courseStatusChange,
                userCreatedEmailSent: userCreatedConsumer,
        }
    }
